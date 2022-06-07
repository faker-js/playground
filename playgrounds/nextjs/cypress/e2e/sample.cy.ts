import { faker } from '@faker-js/faker';

describe('Search', () => {
  it('should search for random word', () => {
    const word = faker.word.noun();

    cy.visit('https://google.com');

    cy.get('input[name="q"]').type(word);

    cy.get('form[role="search"]').submit();

    cy.url().should('include', `https://www.google.com/search?q=${word}`);
  });
});
