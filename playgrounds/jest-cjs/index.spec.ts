import { faker } from '@faker-js/faker';
import { faker as fakerDe } from '@faker-js/faker/locale/de';
import { faker as fakerFR } from '@faker-js/faker/locale/fr';
import { describe, expect, it } from '@jest/globals';

describe('Faker Jest CJS', () => {
  describe.each([
    { title: 'default', fakerInstance: faker },
    { title: 'with locale DE', fakerInstance: fakerDe },
    { title: 'with locale FR', fakerInstance: fakerFR },
  ])('default', ({ fakerInstance }) => {
    it('should be able to access faker', () => {
      expect(fakerInstance).toBeTruthy();
      expect(typeof fakerInstance).toBe('object');
      expect(fakerInstance.definitions.metadata.title).toEqual(expect.any(String));
    });

    it('should be able to access faker apis', () => {
      expect(fakerInstance.person.firstName()).toEqual(expect.any(String));
      expect(fakerInstance.location.city()).toEqual(expect.any(String));
      expect(fakerInstance.animal.bird()).toEqual(expect.any(String));
    });
  });
});
