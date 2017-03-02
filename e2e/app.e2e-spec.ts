import { NgxAsidePage } from './app.po';

describe('ngx-aside App', () => {
  let page: NgxAsidePage;

  beforeEach(() => {
    page = new NgxAsidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
