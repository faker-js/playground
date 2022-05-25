// @ts-check
import { faker } from "@faker-js/faker";
import { faker as fakerDe } from "@faker-js/faker/locale/de";

// Testing https://github.com/faker-js/faker/pull/642
// import es from "@faker-js/faker/locales/es";
// import fr from "@faker-js/faker/locales/fr";

console.log("Testing js esm index");

console.log(typeof faker);

console.log(faker.name.firstName());

console.log(faker.address.city());

console.log("Testing js esm locale");

console.log(fakerDe.name.firstName());

console.log(fakerDe.animal.bird());

console.log(fakerDe.address.city());

// console.log("es title:", es.title);

// console.log(
//   "Manually loaded locale:",
//   new Faker({
//     locales: { es, fr },
//     locale: "es",
//     localeFallback: "fr",
//   }).locales.es.title
// );
