import { setWorldConstructor, setDefaultTimeout, After, Before, Status } from 'cucumber';
import { context, set, setScenarioContextDefaults} from './context.js';
import { takeScreenshot, destroy } from './browser.js';
import humanizeDuration from "humanize-duration";
import chalk from 'chalk';


function CustomWorld({ attach, parameters }) {
    set(parameters);
    this.attach = attach;
    setDefaultTimeout(context.step_timeout);
}

function extractFeatureName(uri) {
    return uri.split('/').pop().split('.')[0]
}
function scenarioFullName(scenario) {
    return `${chalk.green(extractFeatureName(scenario.sourceLocation.uri))}: ${chalk.magentaBright(scenario.pickle.name)}`
}
function scenarioResult(result) {
    return `${scenarioStatus(result.status)} ${chalk.yellow(humanizeDuration(result.duration/1000000))}`;
}
function scenarioStatus(status) {
    if (status === 'passed')
        return `${chalk.green(status)}`;
    else
        return `${chalk.red(status)}`;
}

Before(async function (scenario) {

    context.current_scenario = scenario.pickle.id;

    console.log(`${scenarioFullName(scenario)} ${chalk.green("started")}`);
    setScenarioContextDefaults();
});

After(async function (scenario) {

    console.log(` ${scenarioFullName(scenario)} ended in -  ${scenarioResult(scenario.result)}`);

    if (scenario.result.status === Status.FAILED) {
        const screenshot = await takeScreenshot();
        if (screenshot)
            this.attach(screenshot, 'image/png');
    }

    // Teardown browser
    await destroy()
});

setWorldConstructor(CustomWorld);
