import { BdoPage } from './app.po';

describe('bdo App', function() {
  let page: BdoPage;

  beforeEach(() => {
    page = new BdoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
