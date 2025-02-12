# Faker Playground

This repo contains multiple test playgrounds:

- browser
- cjs
- esm
- vite-cjs
- vite-esm
- webpack-cjs

You should checkout this project beside your `faker` folder, so the pnpm link in [package.json](./package.json) is correctly resolved.  
By default, the project uses the latest version of `faker`, but you can switch to the local clone by:

1. editing the `package.json`
2. replacing `"overrides-for-dev"` with `"overrides"`
3. running `pnpm install`

Make sure you have build the `faker` project so there is a `dist` folder.

---

Please run `pnpm install` once before executing any of the following commands.

You can run:

- `pnpm -r --workspace-concurrency 1 test` to test `cjs` and `esm`
- `pnpm -r --workspace-concurrency 1 test:js` to test only **JavaScript** files for `cjs` and `esm`
- `pnpm -r --workspace-concurrency 1 test:ts` to test only **TypeScript** files for `cjs` and `esm`
- `pnpm run test:cjs` to test only `cjs`
- `pnpm run test:esm` to test only `esm`
- `pnpm run build` to build/bundle all playgrounds

---

To test the `browser` playground you need to run `pnpm -r serve` and then open the `http://localhost:3000/` in your browser.
