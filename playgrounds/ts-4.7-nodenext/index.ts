import { faker, Faker } from "@faker-js/faker";
import de, { faker as fakerDe } from "@faker-js/faker/locale/de";
import fr from "@faker-js/faker/locale/fr";

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

console.log("de title:", de.title);

console.log(
  "Manually loaded locale:",
  new Faker({
    locales: { de, fr },
    locale: "de",
    localeFallback: "fr",
  }).locales.de!.title
);
