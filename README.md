# QA Automation Framework Template

Empty starter framework for QA Automation using Cypress + JavaScript.

## Folder Structure

```text
cypress/
├── e2e/
│   ├── ui/
│   └── api/
├── fixtures/
├── pages/
├── support/
├── test-data/
└── utils/
docs/
├── test-cases/
└── bug-reports/
reports/
.github/
└── workflows/
```

## Getting Started

1. Install Node.js.
2. Run:
   ```bash
   npm install
   ```
3. Open Cypress:
   ```bash
   npm run cy:open
   ```
4. Run all Cypress tests:
   ```bash
   npm run cy:run
   ```

## Notes

- Put UI tests in `cypress/e2e/ui/`
- Put API tests in `cypress/e2e/api/`
- Put reusable page objects in `cypress/pages/`
- Put reusable custom commands in `cypress/support/commands.js`
- Put fixture/test data in `cypress/fixtures/` or `cypress/test-data/`
- Put helper functions in `cypress/utils/`
- Put manual test-case references in `docs/test-cases/`
- Put bug-report references in `docs/bug-reports/`
