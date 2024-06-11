
Instuctions for the Team that has Cypress installed with all the dependencies already.

# zillow-mortgage-calculator-automation
Cypress automation suite for zillow mortgage calculator

## Clone the repository
git clone https://github.com/your_username/zillow-mortgage-calculator-automation.git

## IDE Used: Visual Studio Code
> Use VS Code IDE or terminal to open repository
> Open Visual Studio code
> tap open and navigate to the cloned repository 

## Navigate to the cloned repository
>cd zillow-mortgage-calculator-automation

>navigate to integration foldervin repository
>
>navigate to cypress/e2e

## Open cypress
>npx cypress open
>Execute both tests in Cypress 



## Folder Structure
cypress/
fixtures/: Fixture files for mock data.
integration/cypress: Test files (.spec.js).
plugins/: Cypress plugins.
support/: Custom commands and other support files.
cypress.json: Cypress configuration file.

**Scenario 1**  calculate_mortgage.spec.js: Contains test cases related to  simple calculating mortgage payments.

**Scenario 2**  advanced.mortgage.payment.spec.js Contains test cases related to  Advanced calculating mortgage payments.


## Reporting

> Mochawesome reporting plug installed and added to the config file.
>
> After the test run is complete, you can find the generated reports in the specified directory (cypress/reports)

**support/:** Contains custom commands and utilities used across the tests.

**cypress.json:** Cypress configuration file.

**package.json:** Contains project dependencies and scripts.
