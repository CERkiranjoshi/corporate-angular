import { CorporateAngularPage } from './app.po';

describe('corporate-angular App', () => {
  let page: CorporateAngularPage;

  beforeEach(() => {
    page = new CorporateAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
