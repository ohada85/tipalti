import Page from '../Page.js';
import { By } from 'selenium-webdriver';

class dogsIndexPage extends Page {
    constructor() {
        super();
        this.pageParams = {
            url: `https://qa-tipalti-assignment.tipalti-pg.com/index.html`,
            title: 'Phantom by HTML5 UP',
            h1Title: 'The Tipalti Dev-Dogs Foundation 👩‍💻',
        };
        this.elements = {
            burgerMenuButton: By.css('.inner [href="#menu"]'),
            menuOpened: By.css('.is-menu-visible'),
            burgerMenuOption: By.css(`[id="menu"] .inner ul li`),
        };
    }

    async goto() {
        return await super.goto(this.pageParams);
    }

    async getBurgerMenuOptions() {
        await this.clickOnLocator(this.elements.burgerMenuButton);
        await this.getElement(this.elements.menuOpened);
        await this.findInElementsByText(this.elements.burgerMenuOption, "Home")
        return await this.getElementsText(this.elements.burgerMenuOption);
    }

    async clickADog(dogName) {
        const dogOption = await this.findInElementsByText(this.elements.burgerMenuOption, dogName);
        await this.clickWebElement(dogOption);
        await this.urlChanged(this.pageParams.url);
    }

}

export default dogsIndexPage;