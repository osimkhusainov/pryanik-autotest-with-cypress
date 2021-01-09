/// <reference types="cypress" />

import { addNew } from "../support/addNewNews";

describe("pryanik", () => {
  beforeEach("login in the app", () => {
    cy.Login();
  });
  it("add news", () => {
    cy.get('[id="news"]').click();
    addNew.newTitle("Тест номер 1");
    addNew.newTitle("#Тест номер 2");
    addNew.tagUser("Все пользователи", 0);
    addNew.tagUser("Увеличиваем продажи", 1);
    addNew.tagUser("Отличный маркетинг", 2);
    addNew.tagUser("Обмен опытом", 3);
    addNew.tagUser("Эксперты Идей", 4);
    addNew.tagUser("keedice@gmail.com", 5);
    addNew.tagUser("Виртуальный Персонаж", 6);
  });
  it("select News", () => {
    cy.get('[title="Новости"]')
      .click()
      .then((item) => {
        cy.wrap(item).should("have.class", "Selectize-Button_active");
      });
    cy.get('[class="CommonmarkRender-Paragraph"]')
      .eq(0)
      .should("have.text", "Виртуальный Персонаж");
  });
});
