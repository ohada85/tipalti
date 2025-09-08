import selenium from 'selenium-webdriver';
import chromedriver from 'chromedriver';
import {context} from './context.js';

let driver = null

function browser() {
    if (driver)
        return driver

    let usr_agent = `--user-agent=${context.trace_id_str}`

    let args = ['--window-size=1600,1200', 'disable-extensions', 'no-sandbox', 'disable-dev-shm-usage', usr_agent];
    if (context.docker)
        args.push('headless')

    driver = new selenium.Builder().withCapabilities({
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: { args: args },
        path: chromedriver.path
    }).build();

    return driver
}

async function takeScreenshot() {
    if (driver)
        return driver.takeScreenshot()
    else
        return null
}

async function destroy() {
    if (driver) {
        await driver.close()
        await driver.quit()
        driver = null
    }
}

export {
  destroy,
  takeScreenshot,
  browser,
};
