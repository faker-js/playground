import { faker } from '@faker-js/faker';

describe('Search', () => {
  it('should search for random word', () => {
    const word = faker.word.noun();

    cy.visit('https://www.bing.com');

    cy.get('textarea[name="q"]').type(word, { force: true });

    cy.get('form[role="search"]').submit();

    cy.url().should('include', `https://www.bing.com/search?q=${word}`);
  });
});
