import { faker, Faker } from "@faker-js/faker";
import fakerDe from "@faker-js/faker/locale/de";

// Testing https://github.com/faker-js/faker/pull/642
import es from "@faker-js/faker/locales/es";
import fr from "@faker-js/faker/locales/fr";

console.log("Testing ts esm index");

console.log(typeof faker);

console.log(faker.name.firstName());

console.log(faker.address.city());

console.log("Testing ts esm locale");

console.log(typeof fakerDe, fakerDe.locale);

console.log(fakerDe.name.firstName());

console.log(fakerDe.animal.bird());

console.log(fakerDe.address.city());

const MOCK_ARRAY = Array.from(
  { length: 50 },
  (_, index) => `Test-${index + 1}`
);

const method = () =>
  MOCK_ARRAY[faker.datatype.number({ min: 0, max: MOCK_ARRAY.length - 1 })];

faker.seed(42);
console.log(method()); // 19

faker.seed(42);
console.log(method()); // 19

console.log("es title:", es.title);

console.log(
  "Manually loaded locale:",
  new Faker({
    locales: { es, fr },
    locale: "es",
    localeFallback: "fr",
  }).locales.es.title
);
