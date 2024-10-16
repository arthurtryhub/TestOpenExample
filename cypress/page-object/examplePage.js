const el = {
  dialog: '[role="dialog"]',
  registerheadBtn: '[data-testid="header-sign-up-button"]',
};

let title = "Example Domain";
class ExamplePage {
  open() {
    cy.visit("");
  }
  validateUrlTitle() {
    cy.title().should("eq", title);
  }
}
export default new ExamplePage();
