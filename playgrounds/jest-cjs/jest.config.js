/**
 * @type {import("jest").Config}
 **/
module.exports = {
  testEnvironment: 'node',
  transformIgnorePatterns: [
    // 'node_modules/(?!@faker-js).+', // required if the projects package manager is "npm" 
    'node_modules/.pnpm/.+/node_modules/(?!@faker-js).+', // required if the package manager is "pnpm"
    // I have no idea how yarn builds the node_modules directory otherwise the pattern would be here ¯\(o_o)/¯
    // 
    // NOTE!!!
    // Exactly one of the patterns must be active at the same time - no more, no less!!!
  ],
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.json',
        useESM: true,
      },
    ],
  },
};
