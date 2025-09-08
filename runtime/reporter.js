import { generate as __generate } from 'cucumber-html-reporter';

const options = {
    theme: 'hierarchy',
    jsonFile: 'reports/cucumber-report.json',
    output: 'reports/cucumber-report.html',
    reportSuiteAsScenarios: true,
    columnLayout: 1,
    scenarioTimestamp: true,
    launchReport: false,
};

function generate() {
    __generate(options)
}

export {
  generate
};

