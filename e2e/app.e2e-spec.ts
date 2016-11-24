import { CursoNg2Page } from './app.po';

describe('curso-ng2 App', function() {
  let page: CursoNg2Page;

  beforeEach(() => {
    page = new CursoNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
