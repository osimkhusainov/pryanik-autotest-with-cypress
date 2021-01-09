export class News {
  newTitle(title) {
    cy.get(
      '[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]'
    )
      .eq(0)
      .type(title);
    cy.contains("Отправить").click();
    cy.get('[class="CommonmarkRender-Paragraph"]').should(
      "contain",
      title
    );
    cy.wait(500)
  }
  tagUser(title, num){
    cy.get(
        '[class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr"]'
      ).eq(0).type('@ .');
      cy.wait(500)
      cy.get('[class="MentionItem-Data"]').eq(num).click()
      cy.contains("Отправить").click();
      cy.get('[class="CommonmarkRender-Paragraph"]').should(
        "contain",
        title
      );
      cy.wait(1000)
  }
}
export const addNew = new News();
