import Page from '../Page.js';
import { By, until } from 'selenium-webdriver';

class ArticlePage extends Page {
  constructor() {
    super();

    this.elements = {
      contentTableChapter: By.css('.vector-toc-contents .vector-toc-list-item'),
      reference: By.css('div.reflist:not(.reflist-lower-alpha) span.reference-text'),

    };
  }

  async getSearchResults() {
    const title = await this.getPageTitle();
    const number_of_chapters = (await this.getElements(this.elements.contentTableChapter)).length.toString();
    const number_of_References = (await this.getElements(this.elements.reference)).length.toString();

      return {
        title,
        number_of_chapters,
        number_of_References
      };
  }

}

export default ArticlePage;
