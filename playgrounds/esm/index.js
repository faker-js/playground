// @ts-check
import { faker, Faker } from "@faker-js/faker";
import de, { faker as fakerDe } from "@faker-js/faker/locale/de";
import fr from "@faker-js/faker/locale/fr";

console.log("Testing js esm index");

console.log(typeof faker);

console.log(faker.person.firstName());

console.log(faker.location.city());

console.log("Testing js esm locale");

console.log(fakerDe.person.firstName());

console.log(fakerDe.animal.bird());

console.log(fakerDe.location.city());

console.log("de title:", de.title);

console.log(
  "Manually loaded locale:",
  new Faker({
    locales: { de, fr },
    locale: "es",
    localeFallback: "fr",
  }).locales.de.title
);
