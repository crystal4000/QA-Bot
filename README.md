# Q&A Bot

Welcome to Q&A Bot, a simple question and answer bot powered by AI! This README will guide you through setting up, running, and using the application, as well as provide information on the AI model or API used and how to test it.

## Table of Contents

- [Setup and Run Instructions](#setup-and-run-instructions)
- [Overview of Application Features](#overview-of-application-features)
- [Information on AI Model or API Used](#information-on-ai-model-or-api-used)
- [How to Test](#how-to-test)
- [Other Necessary Information](#other-necessary-information)

## Setup and Run Instructions

To set up and run the Q&A Bot application locally, follow these steps:

- Clone the Repository

```bash
 git clone <repository-url>
```

- Navigate to Project Directory:

```bash
 cd q-and-a-bot
```

- Install Dependencies:

```bash
 npm install
```

- Set Up Environment Variables:

```bash
OPENAI_API_KEY=your-api-key
```

- Run the Application:

```bash
npm run dev
```

- Access the Application:
  Open your browser and navigate to http://localhost:3000.

## Overview of Application Features

Q&A Bot is a simple web-based application that allows users to ask questions and receive answers generated by an AI model. Here's an overview of its features:

- Ask Questions: Users can input their questions in a text field provided on the homepage.
- Get Answers: Upon submitting a question, the application sends the question to the AI model/API and displays the generated answer.
- Try Again: Users have the option to ask another question by clicking the "Try again" button.
- Responsive Design: The application is designed to be responsive and works well on various screen sizes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
