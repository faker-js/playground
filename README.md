# Faker Playground

This repo contains three test playgrounds.

`cjs`, `esm` and `browser`

You should checkout this project beside your `faker` folder, so pnpm links are correctly resolved.  
Then build the faker project so there is a dist folder.

In the playground project you should run `pnpm run install` once.

You can run:

- `pnpm run test` to test `cjs` and `esm`
- `pnpm run test:cjs` to test only `cjs`
- `pnpm run test:esm` to test only `esm`

You can also `cd` into the `cjs` or `esm` folder and run the test only for `js` or `ts`.

---

To test the `browser` you need to just `cd` into the `browser` folder and run `pnpm run test`
