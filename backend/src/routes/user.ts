import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { sign,verify } from 'hono/jwt';


export const userRouter = new Hono<{
	Bindings: {
		DATABASE_URL: string,
        JWT_SECRET: string
	}   
}>();



userRouter.post('/signup', async (c) => {
	const prisma = new PrismaClient({
    //@ts-ignore
		datasourceUrl: c.env?.DATABASE_URL,
	}).$extends(withAccelerate());
	const body = await c.req.json();
	try {
		const user:any = await prisma.user.create({
			data: {
				email: body.email,
        //@ts-ignore
				password:body.password,
				name:body.name
			},
      
		});
    //@ts-ignore
    const token = await sign({ id: user.id }, c.env?.JWT_SECRET)
	  console.log("signup successfully")
		return c.json({token})
         
	} catch(e) {
    console.log(e)
		return c.status(403);
	}
})

// signin
userRouter.post('/signin', async (c) => {
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const user = await prisma.user.findUnique({
		where: {
			email: body.email
		}
	});

	if (!user) {
		c.status(403);
		return c.json({ error: "user not found" });
	}

	const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	return c.json({message: "login successful", token: jwt});
})




userRouter.post('/signout', (c) => {
    return c.json({ message: 'Logout successful' })
})