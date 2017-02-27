import { FaypewebStructurePage } from './app.po';

describe('faypeweb-structure App', () => {
  let page: FaypewebStructurePage;

  beforeEach(() => {
    page = new FaypewebStructurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
