import { faker, Faker } from "@faker-js/faker";
import de, { faker as fakerDe } from "@faker-js/faker/locale/de";
import fr from "@faker-js/faker/locale/fr";

console.log("Testing ts cjs index");

console.log(typeof faker);

console.log(faker.name.firstName());

console.log(faker.address.city());

console.log("Testing ts cjs locale");

console.log(typeof fakerDe, fakerDe.locale);

console.log(fakerDe.name.firstName());

console.log(fakerDe.animal.bird());

console.log(fakerDe.address.city());

console.log("de title:", de.title);

console.log(
  "Manually loaded locale:",
  new Faker({
    locales: { de, fr },
    locale: "de",
    localeFallback: "fr",
  }).locales.de!.title
);
