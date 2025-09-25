import { When, Then } from 'cucumber';
import { context } from '../runtime/context.js';
import dogsIndexPage from '../pages/tipalti/dogsIndexPage.js';
import dogPage from '../pages/tipalti/dogPage.js';
import chai from 'chai'; chai.should();



When(/^user opens dogs dropdown menu$/, async function () {
  let dogs = await (await new dogsIndexPage().goto()).getBurgerMenuOptions();
  context.current_scenario.dogNames = dogs;
});


Then(/^dogs dropdown menu includes "(.*)"$/, async function (dogName) {
  context.current_scenario.dogNames.includes(dogName).should.eql(true);
});

When(/^sending a treat to "(.*)"$/, async function (dogName) {
  await new dogsIndexPage().clickADog(dogName);
  await new dogPage().pageLoaded(dogName);
  await new dogPage().sendTreat(dogName);
});


Then(/^error page opened$/, async function () {
  await new dogPage().redirectedToErrorPage();
});