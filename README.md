# Cypress Search Functionality Tests

## Overview

This project contains automated tests using Cypress to validate the search functionality of a web page that displays information about various rap artists. The tests ensure that the search works correctly when initiated by pressing Enter or by clicking the search icon.

## Features

- **Search by Typing and Pressing Enter**: Verifies that users can perform a search by typing a term and pressing Enter.
- **Search by Typing and Clicking the Search Icon**: Ensures that users can perform a search by typing a term and clicking the search icon.
- **Display Error for Invalid Search**: Checks that an error message is displayed when an invalid search term is entered.

## Installation

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.12.2 or higher)
- **npm** (Node Package Manager)

### Cloning the Repository

To get started, clone this repository to your local machine using Git:

```bash
git clone https://github.com/logangaabriel/cypress-search-methods
```

Navigate to the project directory:

```bash
cd cypress-search-methods
```

### Installing Dependencies

After cloning the repository, install the necessary dependencies by running:

```bash
npm install
```

This will install Cypress and any other dependencies required to run the tests.

## Running the Tests

Once the dependencies are installed, you can run the tests using the following commands:

### Open Cypress Test Runner

To open the Cypress Test Runner, use:

```bash
npx cypress open
```

This will launch the Cypress interface, where you can select and run individual test files.

### Run All Tests in Headless Mode

To run all tests in headless mode (without the UI), use:

```bash
npm test
```

This command will execute all tests in the command line, which is useful for continuous integration setups.

## Project Structure

- **cypress/e2e/**: Test files for search functionality.
- **cypress/support/**: Custom commands and utilities.
- **package.json**: Project dependencies and scripts.

## Conclusion

These Cypress tests ensure that the search functionality on your web page behaves as expected, providing a consistent and reliable user experience. Whether you're searching by pressing Enter or clicking the search icon, the tests cover all scenarios to keep your application robust.

## Additional Resources

For more information on Cypress and how to customize your tests further, visit the official [Cypress documentation](https://docs.cypress.io).

## Connect with Me

- [Medium](https://medium.com/@gabriellogan.0804/testando-a-funcionalidade-de-busca-com-cypress-f24ee92e4c79)
- [YouTube](https://www.youtube.com/@gaabriellogan)
- [LinkedIn](https://www.linkedin.com/in/gabriel-logan/)