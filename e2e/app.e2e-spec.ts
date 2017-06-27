import { BusinessVODPage } from './app.po';

describe('business-vod App', () => {
  let page: BusinessVODPage;

  beforeEach(() => {
    page = new BusinessVODPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
