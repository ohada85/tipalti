import Page from '../Page.js';
import { By } from 'selenium-webdriver';

class dogPage extends Page {
    constructor() {
        super();
        this.pageParams = {
            url: dogName => `https://qa-tipalti-assignment.tipalti-pg.com/${dogName}.html`,
            errorMessage: "This XML file does not appear to have any style information associated with it. The document tree is shown below."
        }
        this.elements = {
            nameInputField: By.css('[id="name"]'),
            mailInputField: By.css('[id="email"]'),
            textInputField: By.css('[id="message"]'),
            sendButton: By.css(`input.primary[type="submit"]`),
            errorMessage: By.css(`.header span`),
        };
    }

    async pageLoaded(dogName) {
        const currentURL = await this.getCurrentUrl();
        currentURL.should.include(this.pageParams.url(dogName.toLowerCase()));
    };

    async sendTreat(dogName) {
        await this.enterText(this.elements.nameInputField, "ohad");
        await this.enterText(this.elements.mailInputField, "test1+1@gmail.com");
        await this.enterText(this.elements.textInputField, `a treat for ${dogName}, My best friend`);
        await this.clickOnLocator(this.elements.sendButton);
        return await this.urlChanged(this.pageParams.url(dogName.toLowerCase()));
    }

    async pageLoaded(dogName) {
        const currentURL = await this.getCurrentUrl();
        currentURL.should.include(this.pageParams.url(dogName.toLowerCase()));
    }

    async redirectedToErrorPage() {
        await this.findInElementsByText(this.elements.errorMessage, this.pageParams.errorMessage);
        
    }


}

export default dogPage;