// @ts-check

console.log("Testing js cjs index");

const { faker, Faker } = require("@faker-js/faker");

console.log(typeof faker);

console.log(faker.person.firstName());

console.log(faker.location.city());

console.log("Testing js cjs locale");

const { faker: fakerDe } = require("@faker-js/faker/locale/de");

console.log(fakerDe.person.firstName());

console.log(fakerDe.animal.bird());

console.log(fakerDe.location.city());

// Testing https://github.com/faker-js/faker/pull/642
// const es = require("@faker-js/faker/locales/es");
// const fr = require("@faker-js/faker/locales/fr");

// console.log("es title:", es.title);

// console.log(
//   "Manually loaded locale:",
//   new Faker({
//     locales: { es, fr },
//     locale: "es",
//     localeFallback: "fr",
//   }).locales.es.title
// );
