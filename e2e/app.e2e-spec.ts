import { PawspassportWebPage } from './app.po';

describe('pawspassport-web App', function() {
  let page: PawspassportWebPage;

  beforeEach(() => {
    page = new PawspassportWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
