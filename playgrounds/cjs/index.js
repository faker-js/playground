// @ts-check

console.log("Testing js cjs index");

const { faker, Faker } = require("@faker-js/faker");

console.log(typeof faker);

console.log(faker.name.firstName());

console.log(faker.address.city());

console.log("Testing js cjs locale");

const { default: de, faker: fakerDe } = require("@faker-js/faker/locale/de");
const { default: fr } = require("@faker-js/faker/locale/fr");

console.log(fakerDe.name.firstName());

console.log(fakerDe.animal.bird());

console.log(fakerDe.address.city());

// Testing https://github.com/faker-js/faker/pull/642

console.log("de title:", de.title);

console.log(
  "Manually loaded locale:",
  new Faker({
    locales: { de, fr },
    locale: "de",
    localeFallback: "fr",
  }).locales.de.title
);
