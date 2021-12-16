describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
    cy.visit("/");
    cy.contains("li", "Tuesday")
      .click()
      .should("have.css", "color", "rgb(131, 149, 167)");

    //   cy.contains("[data-testid=day]", "Tuesday")
    //   cy.contains("li", "Tuesday")
    // .click()
    // .should("have.class", "day-list__item--selected");
  })
});
