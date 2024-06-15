# Next JS Newsletter and Carousel App

This repository contains a Next.js application that includes a newsletter subscription form and a carousel slider component.

The application is accessible at https://frontend-technical-test-426508.uc.r.appspot.com/.

## Setup Instructions

### Prerequisites

1. **Node.js**: Ensure Node.js (version 20 or higher) is installed on your machine.
   - [Node.js Installation](https://nodejs.org/en/download/)
   
2. **Docker**: Install Docker if you intend to containerize the application for deployment.
   - [Docker Installation](https://docs.docker.com/get-docker/)

### Local Development

```bash
# Clone the repository
git clone https://github.com/your-username/frontend-technical-test.git
cd frontend-technical-test

# Install dependencies
npm install

# Run the application locally
npm run dev
```

### Docker Containerization

```bash
# Build the Docker image
docker build -t frontend-technical-test .

# Run the Docker container
docker run -p 3000:3000 frontend-technical-test

```

## Design

### Next.js and Tailwind CSS 
The application leverages Next.js for server-side rendering and Tailwind CSS for styling. These libraries are chosen for their performance and ease of use in modern web development.

