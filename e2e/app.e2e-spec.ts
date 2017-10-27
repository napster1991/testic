import { FunrPage } from './app.po';

describe('funr App', function() {
  let page: FunrPage;

  beforeEach(() => {
    page = new FunrPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
