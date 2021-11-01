describe("App Maps - Test E2E", () => {
  const MAP_DIV = "div.gm-style";
  const RESULTS_DIV = "div.pac-container";
  const ITEM_DIV = "div.pac-item";
  const SEARCH_INPUT = "input.search";
  const QUERY_SPAN = "span.pac-item-query";
  const POINTER_IMG =
    "img[src^='https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2'][src$='.png']";

  beforeEach(() => {
    cy.visit(Cypress.env("url_test"));
  });

  it("App can be openend", () => {
    cy.title().should("include", "App Redux Maps");
    cy.get(MAP_DIV).should("exist");
    cy.get(SEARCH_INPUT).type(" ");
    cy.get(POINTER_IMG).should("not.exist");
  });

  it("Returned some results when you put a place in search bar", () => {
    cy.get(SEARCH_INPUT).type("Sevilla");
    cy.get(RESULTS_DIV).should("exist");
    cy.get(ITEM_DIV).should("have.length", 5);
    cy.get(QUERY_SPAN).eq(1).should("have.text", "Sevilla la Nueva");
  });

  it("Marked in map when you select a result place", () => {
    cy.get(SEARCH_INPUT).type("Sevilla");
    cy.get(QUERY_SPAN).eq(0).click();
    cy.get(SEARCH_INPUT).clear().type("Huelva");
    cy.get(QUERY_SPAN).eq(0).click();
    cy.get(POINTER_IMG).should("exist");
    cy.get(POINTER_IMG).should("have.length", 2);
  });
});
