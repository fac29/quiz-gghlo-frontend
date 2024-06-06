# GGHLO-Frontend

Welcome to our Quiz App, which we have built with Typescript and React and deployed on github pages and AWS.

## Functionality

Our project is intended to allow you to do the following things (but is currently a work in progress 😉):

- Generate a quiz based on category, difficulty level and whether it's favourited
- Create/edit/delete/favourite questions
- See a summary of your results for the current quiz and the whole session

## Installation

To run this, you will need to have the [backend](!https://github.com/fac29/-quiz-gghlo) running locally on your machine.

1. **Clone the repository**

    ```
    git clone https://github.com/fac29/quiz-gghlo-frontend
    cd quiz-gghlo-frontend
    ```

2. **Install dependencies**

    ```
    npm install
    ```

3. **Run the application**

    ```
    npm run dev
    ```

## Testing (Cypress)

We have included end-to-end testing. To run this enter the following command in your terminal.

    ```
    npx cypress open
    ```

Navigate to E2E Testing and select the test you want to run.
