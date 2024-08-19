# TrendTales

**TrendTales** is a modern, fully-featured blogging platform designed for sharing your stories, ideas, and insights with the world. Built with a focus on performance and scalability, TrendTales leverages cutting-edge technologies to deliver a seamless user experience.

## Technologies Used

### Frontend
- **React**: A powerful JavaScript library for building user interfaces. TrendTales uses React as the frontend framework to create dynamic, interactive, and responsive pages.
- **TypeScript**: A statically typed superset of JavaScript, providing better tooling, error detection, and code quality. The entire frontend is written in TypeScript for maintainability and scalability.

### Backend
- **Hono**: A fast and lightweight web framework for TypeScript/JavaScript, designed to work with various serverless platforms. Hono powers the backend of TrendTales, handling API requests, authentication, and data management efficiently.
- **TypeScript**: The backend is also fully written in TypeScript, ensuring consistency across the codebase and enhancing developer productivity.

### Deployment
- **Cloudflare**: TrendTales is deployed on Cloudflare, taking advantage of its global network to ensure fast load times and robust security. Both the frontend and backend are optimized to run efficiently on Cloudflare's edge infrastructure.

## Features
- **Responsive Design**: The site is fully responsive, providing an optimal experience on desktops, tablets, and mobile devices.
- **Rich Text Editor**: Write and format your blog posts with an easy-to-use rich text editor.
- **User Authentication**: Secure user authentication system, allowing users to sign up, log in, and manage their blog posts.
- **API-Driven**: The backend provides a RESTful API for all operations, enabling easy integration with other services or platforms.
- **SEO Friendly**: Built with SEO in mind, ensuring your content is easily discoverable by search engines.
- **Fast and Secure**: Hosted on Cloudflare, leveraging edge computing for minimal latency and strong security protections.

## Getting Started

### Prerequisites
- **Node.js**: Ensure you have Node.js installed on your machine.
- **Cloudflare Account**: Required for deployment and managing your site.

### Installation

1. **Clone the repository**:

    ```bash
    git clone https://github.com/vikash2411/TrendTales.git
    ```

2. **Navigate to the frontend directory**:

    ```bash
    cd TrendTales/frontend
    ```

3. **Install frontend dependencies**:

    ```bash
    npm install
    ```

4. **Navigate to the backend directory**:

    ```bash
    cd ../backend
    ```

5. **Install backend dependencies**:

    ```bash
    npm install
    ```

### Running the Development Server

1. **Frontend**: Start the React development server.

    ```bash
    cd frontend
    npm start
    ```

    The frontend will be available at `http://localhost:3000`.

2. **Backend**: Start the Hono backend server.

    ```bash
    cd backend
    npm start
    ```

    The backend API will be available at `http://localhost:8787`.

### Deployment

TrendTales is deployed using Cloudflare. You can deploy both the frontend and backend by following these steps:

1. **Frontend Deployment**:

    - Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

    - Build the frontend for production:

    ```bash
    npm run build
    ```

    - Deploy to Cloudflare Pages or Workers:

    Follow Cloudflare's [documentation](https://developers.cloudflare.com/pages/get-started/) for detailed instructions.

2. **Backend Deployment**:

    - Navigate to the backend directory:

    ```bash
    cd backend
    ```

    - Deploy to Cloudflare Workers:

    ```bash
    npm run deploy
    ```

    Follow Cloudflare's [documentation](https://developers.cloudflare.com/workers/get-started/guide/) for more information.

## Contributing

We welcome contributions! If you'd like to contribute to TrendTales, please fork the repository, create a new branch, and submit a pull request. Make sure to follow the existing coding standards and write tests for any new features.

## License

TrendTales is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Contact

For any questions or feedback, feel free to open an issue on GitHub or contact the maintainer:

- **Vikash**: [GitHub Profile](https://github.com/vikash2411)
