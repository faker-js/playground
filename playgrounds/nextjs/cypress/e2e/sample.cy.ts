import { faker } from '@faker-js/faker';

describe('Search', () => {
  it('should search for random word', () => {
    const word = faker.word.noun();

    cy.visit('https://duckduckgo.com/');

    cy.get('input[name="q"]').type(word, { force: true });

    cy.get('form[role="search"]').submit();

    cy.url()
      .should('include', `https://duckduckgo.com/`)
      .should('include', `q=${word}`);
  });
});
