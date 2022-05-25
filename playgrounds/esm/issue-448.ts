import { Faker } from "@faker-js/faker";
// I would expect at least one these work:
// import allLocales from '@faker-js/faker/locales';
// import { locales } from '@faker-js/faker/locales';
// import en from '@faker-js/faker/locales/en';
// import { en } from "@faker-js/faker";

// This code shows how the bind is failing, resulting in
// "Error: Cannot read properties of undefined (reading 'internet')"
const baseFaker = new Faker({ locales: { en } });
console.log("baseFaker.internet.email: ", baseFaker.internet.email);
console.log(baseFaker.internet.email());

// Below here is the code I'm actually trying to write.
// I don't think it's relevant to the bug, but I've left
// it here as an example of the end goal and a possible
// solution.

export class MyFake extends Faker {
  readonly customFake = new CustomFake(this);
}

export class CustomFake {
  private readonly fake: MyFake;

  constructor(fake: MyFake) {
    this.fake = fake;
  }

  /* Side note: this syntax seems a lot easier than the
   * bind() methods faker currently uses. */
  public someFakeThing = () => {
    return "fake data";
  };
}

const myfaker = new MyFake(/* {locales: {en}} */);

// confirm this works
console.log(myfaker.customFake.someFakeThing());

// some debug logs to show values "exist"
// console.log("myfaker: ", myfaker);
// console.log("myfaker.internet: ", myfaker.internet);
console.log("myfaker.internet.email: ", myfaker.internet.email);

// but this fails, presumably because email() is not bound
console.log(myfaker.internet.email());
