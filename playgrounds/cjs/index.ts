import { faker, Faker } from "@faker-js/faker";
import { faker as fakerDe } from "@faker-js/faker/locale/de";

// Testing https://github.com/faker-js/faker/pull/642
// import es from "@faker-js/faker/locales/es";
// import fr from "@faker-js/faker/locales/fr";

console.log("Testing ts cjs index");

console.log(typeof faker);

console.log(faker.person.firstName());

console.log(faker.location.city());

console.log("Testing ts cjs locale");

console.log(typeof fakerDe, fakerDe.definitions.metadata.title);

console.log(fakerDe.person.firstName());

console.log(fakerDe.animal.bird());

console.log(fakerDe.location.city());

// console.log("es title:", es.title);

// console.log(
//   "Manually loaded locale:",
//   new Faker({
//     locales: { es, fr },
//     locale: "es",
//     localeFallback: "fr",
//   }).locales.es.title
// );
