describe("로그인", () => {
  it("로그인에 성공하면 Home으로 이동합니다.", () => {
    cy.visit("/login");

    cy.get("input[type=email]").type("cypress@test.replay");
    cy.get("input[type=password]").type("test1234");
    cy.get("button").click();

    cy.url().should("eq", "http://localhost:3000/");
  });
});
