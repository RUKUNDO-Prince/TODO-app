# Task Manager App

## Overview
This is a task manager application built using React and styled with Tailwind CSS. The app supports dark mode and has multi-language support (English and French). It also includes CRUD operations using a dummy API and comes with unit tests and E2E tests using Cypress.

## Features
- Responsive UI
- Dark mode toggle
- i18n support (English and French)
- Task CRUD operations using a mock API
- Unit & E2E tests
- GitHub Actions for CI

## Installation

1. Clone the repository:
git clone https://github.com/RUKUNDO-Prince/TODO-app.git cd task-manager

markdown
Copy code

2. Install dependencies:
npm install

markdown
Copy code

3. Run the development server:
npm run dev

markdown
Copy code

4. Run tests:
npm run test

markdown
Copy code

5. Run E2E tests:
npx cypress open

markdown
Copy code

## Task CRUD Operations

This app uses a mock API for performing task CRUD operations. The API endpoints are powered by `jsonplaceholder.typicode.com`.

### Endpoints:

- **GET** `/todos`: Fetches the task list.
- **POST** `/todos`: Creates a new task.
- **PUT** `/todos/:id`: Updates an existing task.
- **DELETE** `/todos/:id`: Deletes a task.

## Deployment
You can deploy this app on platforms like Netlify or Vercel by pushing the repository and linking it to your platform account.

## License
This project is licensed under the MIT License.