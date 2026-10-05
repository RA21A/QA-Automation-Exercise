# QA Automation Exercise

QA Automation framework built with **Cypress** and **JavaScript** for testing the [Automation Exercise](https://automationexercise.com) website.

This project is designed to cover both **UI Automation Testing** and **API Automation Testing** using a structured and maintainable framework.

The framework separates test scenarios, page objects, test data, reusable commands, utilities, documentation, reports, and CI/CD configuration to make the project easier to maintain and scale.

---

## Project Objectives

The main objectives of this project are:

- Automate end-to-end UI testing for Automation Exercise.
- Automate REST API testing.
- Implement reusable Page Object Model components.
- Separate test data from test scenarios.
- Create reusable Cypress custom commands.
- Generate screenshots and videos for failed tests.
- Maintain manual test-case and bug-report documentation.
- Prepare the framework for automated execution through CI/CD.
- Build a structured QA Automation project suitable for learning and portfolio purposes.

---

## Tech Stack

- **JavaScript**
- **Node.js**
- **npm**
- **Cypress**
- **Git**
- **GitHub**
- **GitHub Actions**

---

## Test Scope

The project covers two main areas:

### UI Automation Testing

UI tests validate user interactions and end-to-end workflows in the Automation Exercise website.

Planned coverage includes:

- User registration
- Login with valid credentials
- Login with invalid credentials
- Logout
- Register with existing email
- Contact Us form
- Test Cases page
- Product listing
- Product details
- Product search
- Subscription
- Shopping cart
- Product quantity
- Checkout
- Order placement
- Product removal
- Category filtering
- Brand filtering
- Product review
- Recommended products
- Address verification
- Invoice download
- Scroll functionality

Target:

```text
26 UI Test Cases
```

---

### API Automation Testing

API tests validate the Automation Exercise REST API endpoints.

Planned coverage includes:

- Get all products
- Invalid POST request to products endpoint
- Get all brands
- Invalid PUT request to brands endpoint
- Search product
- Search product without required parameter
- Verify login with valid credentials
- Verify login without email
- Invalid DELETE request to login endpoint
- Verify login with invalid credentials
- Create user account
- Delete user account
- Update user account
- Get user account details

Target:

```text
14 API Test Cases
```

---

## Project Structure

```text
qa-automation-exercise/
│
├── cypress/
│   │
│   ├── e2e/
│   │   ├── ui/
│   │   │   ├── authentication.cy.js
│   │   │   ├── contact.cy.js
│   │   │   ├── products.cy.js
│   │   │   ├── cart.cy.js
│   │   │   ├── checkout.cy.js
│   │   │   └── navigation.cy.js
│   │   │
│   │   └── api/
│   │       ├── products-api.cy.js
│   │       ├── brands-api.cy.js
│   │       └── users-api.cy.js
│   │
│   ├── fixtures/
│   │
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── LoginPage.js
│   │   ├── SignupPage.js
│   │   ├── ContactPage.js
│   │   ├── ProductsPage.js
│   │   ├── ProductDetailPage.js
│   │   ├── CartPage.js
│   │   └── CheckoutPage.js
│   │
│   ├── support/
│   │   ├── commands.js
│   │   └── e2e.js
│   │
│   ├── test-data/
│   │   ├── users.js
│   │   ├── products.js
│   │   └── payment.js
│   │
│   └── utils/
│       ├── dataGenerator.js
│       └── apiHelper.js
│
├── docs/
│   ├── test-cases/
│   └── bug-reports/
│
├── reports/
│
├── .github/
│   └── workflows/
│
├── cypress.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## Folder Responsibilities

### `cypress/e2e/ui/`

Contains automated UI test specifications.

UI tests are separated by feature to improve readability and maintainability.

---

### `cypress/e2e/api/`

Contains automated API test specifications.

API tests are separated by API domain such as products, brands, and users.

---

### `cypress/pages/`

Contains Page Object Model classes.

Page Objects store reusable page elements, selectors, and page-specific actions so that test specifications remain clean and easy to maintain.

---

### `cypress/support/`

Contains Cypress support configuration and reusable custom commands.

Main files:

```text
commands.js
e2e.js
```

Reusable workflows such as login, API user creation, and account cleanup can be stored here.

---

### `cypress/test-data/`

Contains reusable test data used by multiple test scenarios.

Examples:

```text
users.js
products.js
payment.js
```

---

### `cypress/fixtures/`

Contains static fixture files required by test scenarios.

Examples may include uploaded test files or static JSON data.

---

### `cypress/utils/`

Contains reusable helper functions that are not directly tied to a specific page.

Examples:

```text
dataGenerator.js
apiHelper.js
```

---

### `docs/test-cases/`

Contains manual test-case documentation and references related to automated test scenarios.

---

### `docs/bug-reports/`

Contains documented defects discovered during testing.

Bug reports may include:

- Bug ID
- Description
- Severity
- Priority
- Preconditions
- Steps to reproduce
- Expected result
- Actual result
- Evidence
- Status

---

### `reports/`

Contains generated automation test reports.

---

### `.github/workflows/`

Contains GitHub Actions workflow files used to execute automated tests in CI/CD.

---

## Prerequisites

Before running the project, install:

- Node.js
- npm
- Git
- Google Chrome or another Cypress-supported browser

Check Node.js:

```bash
node -v
```

Check npm:

```bash
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone <repository-url>
```

Move into the project directory:

```bash
cd qa-automation-exercise
```

Install dependencies:

```bash
npm install
```

Verify Cypress installation:

```bash
npx cypress --version
```

---

## Cypress Configuration

The main Cypress configuration is located in:

```text
cypress.config.js
```

The target application is:

```text
https://automationexercise.com
```

The configuration may include:

- Base URL
- Command timeout
- Page load timeout
- Request timeout
- Response timeout
- Browser viewport
- Screenshot configuration
- Video recording

---

## Running Cypress

### Open Cypress Test Runner

```bash
npm run cy:open
```

This launches the interactive Cypress Test Runner.

Use this mode during:

- Test development
- Debugging
- Selector validation
- Troubleshooting failed test scenarios

---

### Run All Tests

```bash
npm run cy:run
```

Runs all UI and API test specifications in headless mode.

---

### Run UI Tests

```bash
npm run test:ui
```

Runs all UI automation specifications located in:

```text
cypress/e2e/ui/
```

Target:

```text
26 passing
0 failing
```

---

### Run API Tests

```bash
npm run test:api
```

Runs all API automation specifications located in:

```text
cypress/e2e/api/
```

Target:

```text
14 passing
0 failing
```

---

## Full Regression Target

The final regression target for this project is:

```text
UI Tests   : 26
API Tests  : 14
----------------
Total      : 40
```

Expected result:

```text
40 passing
0 failing
```

---

## Page Object Model

This project uses the **Page Object Model (POM)** design pattern.

The purpose of Page Object Model is to separate:

```text
Test Scenario
```

from:

```text
Page Selectors and Page Actions
```

This improves:

- Code readability
- Maintainability
- Reusability
- Selector management
- Test scalability

---

## Test Data Management

Reusable data is stored separately from test specifications.

The framework uses:

```text
cypress/test-data/
```

for reusable JavaScript test data and:

```text
cypress/fixtures/
```

for static fixture files.

Dynamic test data should be generated when uniqueness is required, especially for account registration.

---

## Test Isolation

Each test should be able to run independently.

Tests should avoid relying on data or application state created by previous tests.

Where necessary, the framework should follow:

```text
Setup
↓
Execute Test
↓
Assertion
↓
Cleanup
```

This approach reduces cascading failures and improves test reliability.

---

## Screenshots and Videos

Cypress is configured to capture evidence when test execution fails.

Generated screenshots may be stored in:

```text
cypress/screenshots/
```

Generated videos may be stored in:

```text
cypress/videos/
```

These files can be used for debugging and defect investigation.

---

## Test Documentation

Manual test-case documentation is stored in:

```text
docs/test-cases/
```

Automated test cases should be traceable to documented test scenarios using consistent Test Case IDs.

---

## Bug Reporting

Bug reports are stored in:

```text
docs/bug-reports/
```

A bug report should only be created after confirming that the failure is caused by the application under test and not by the automation script itself.

---

## Reporting

Automation reports will be generated inside:

```text
reports/
```

Reports may contain:

- Test status
- Passed tests
- Failed tests
- Test duration
- Failure details
- Screenshots
- Execution summary

---

## CI/CD

The project is prepared for CI/CD integration using GitHub Actions.

Workflow files are stored in:

```text
.github/workflows/
```

The planned pipeline is:

```text
Push / Pull Request
        ↓
Checkout Repository
        ↓
Setup Node.js
        ↓
Install Dependencies
        ↓
Run Cypress Tests
        ↓
Generate Test Results
        ↓
Upload Reports / Evidence
```

---

## Development Workflow

Recommended development sequence:

```text
Framework Configuration
        ↓
Test Data
        ↓
Page Objects
        ↓
Reusable Commands
        ↓
UI Automation
        ↓
API Automation
        ↓
Regression Testing
        ↓
Stabilization
        ↓
Documentation
        ↓
Reporting
        ↓
CI/CD
```

---

## Project Status

```text
Framework Setup      : In Progress
UI Automation        : In Progress
API Automation       : In Progress
Test Documentation   : In Progress
Reporting            : Planned
CI/CD                 : Planned
```

The status will be updated as development progresses.

---

## Learning Goals

This project is also intended to strengthen practical QA Automation skills including:

- Cypress automation
- JavaScript for testing
- UI testing
- API testing
- Test design
- Page Object Model
- Test isolation
- Reusable automation components
- Debugging failed automation
- Test documentation
- Git version control
- CI/CD integration

---

## Author

Developed as a QA Automation practice and portfolio project using Cypress and JavaScript.