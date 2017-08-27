import { NgTransPage } from './app.po';

describe('ng-trans App', () => {
  let page: NgTransPage;

  beforeEach(() => {
    page = new NgTransPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
