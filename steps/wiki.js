import { When, Then } from 'cucumber';
import MainWiki from '../pages/wikipedia/main-page.js';
import ArticlePage from '../pages/wikipedia/wiki-article-page.js';
import chai from 'chai'; chai.should();


When(/^user search wikipedia for "(.*)"$/, async function (articleName) {
  await (await new MainWiki().goto()).searchValue(articleName);
});

When(/^accessing "(.*)" article from results$/, async function (articleName) {
  await new MainWiki().accessResult(articleName);
});

Then(/^"(.*)" article pops in the results$/, async function (expectedResult) {
  let searchResults = await new MainWiki().getSearchResults();
  // console.log(`results are  ${searchResults} `);
  // console.log(`looking for ${expectedResult} `);
  // console.log(`assertion will result in  ${searchResults.includes(expectedResult)} `);
  searchResults.includes(expectedResult).should.eql(true);
});

Then(/^article displays$/, async function (table) {
  const expectedArticleParams = table.hashes()[0];
  const article = await new ArticlePage().getSearchResults();
  expectedArticleParams.should.eql(article);
});
