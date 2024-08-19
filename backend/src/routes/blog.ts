import { Hono } from 'hono'

import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

import { sign,verify } from 'hono/jwt';
import { userRouter } from './user';


export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string,
        JWT_SECRET: string,
        id:string
	}
    Variables: {
        userId: string
    }

}>();
// middleware
blogRouter.use('/*', async (c, next) => {
    
    const token = c.req.header('authorization') || ""
    // const token = authHeader.split(' ')[1]
    const payload = await verify(token, c.env.JWT_SECRET)
    if (payload) {
      //@ts-ignore
      c.set("userId",payload.id)
      await next()
    }
    else{
        //@ts-ignore
        return c.status(401).json({ message: 'Unauthorized' })
    }
  })

blogRouter.post('/', async (c) => {
	const authorId = c.get('userId');
	const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());

	const body = await c.req.json();
	const post = await prisma.post.create({
		data: {
			title: body.title,
			content: body.content,
			authorId: authorId
		}
	});
	return c.json({
		id: post.id
	});
})

blogRouter.put('/', async (c) => {
   
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json();
    try {
        await prisma.post.update({
            where: {
                id: body.id,
                
            },
            data: {
                title: body.title,
                content: body.content
            }
        });
        
        return c.json({ 
            id: body.id,
            message: 'Post updated'
         });
    } catch (error) {
        c.status(404)
        return c.json({error,message:"Post not found"})
        
    }

    
})

    
blogRouter.get('/bulk',async(c) =>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env?.DATABASE_URL	,
    }).$extends(withAccelerate());

    try {
        const posts = await prisma.post.findMany({
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name:true
                    }
                }
            }
        });
        console.log('Posts fetched:', posts);
	    return c.json(posts);
    } catch (error) {
        return c.json({error,message:"Post not found"})
    }
    

   
})
  

blogRouter.get('/:id',async(c) =>{
    const id = c.req.param("id");
    const prisma = new PrismaClient({
		datasourceUrl: c.env?.DATABASE_URL	,
	}).$extends(withAccelerate());
    
    try {
        const post = await prisma.post.findUnique({
            where:{
                id
            },
            select:{
                content:true,
                title:true,
                id:true,
                author:{
                    select:{
                        name : true
                    }
                }  
            }
        })
    
        return c.json(post) 
    } catch (error) {
        c.status(404)
        return c.json({error,message:"Post not found"})
    }
   
    
})
