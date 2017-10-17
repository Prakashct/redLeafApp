import { RedLeafAppPage } from './app.po';

describe('red-leaf-app App', () => {
  let page: RedLeafAppPage;

  beforeEach(() => {
    page = new RedLeafAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
