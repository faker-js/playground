# Faker Playground

This repo contains three test playgrounds.

`cjs`, `esm` and `browser`

You should checkout this project beside your `faker` folder, so the pnpm link in [package.json](./package.json) is correctly resolved.  
Make sure you have build the `faker` project so there is a `dist` folder.

In the playground project you should run `pnpm install` once.

You can run:

- `pnpm -r test` to test `cjs` and `esm`
- `pnpm -r test:js` to test only **JavaScript** files for `cjs` and `esm`
- `pnpm -r test:ts` to test only **TypeScript** files for `cjs` and `esm`
- `pnpm run test:cjs` to test only `cjs`
- `pnpm run test:esm` to test only `esm`

---

To test the `browser` playground you need to run `pnpm -r serve` and then open the `http://localhost:3000/` in your browser.
