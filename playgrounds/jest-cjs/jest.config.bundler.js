/**
 * @type {import("jest").Config}
 **/
module.exports = {
  testEnvironment: 'node',
  transformIgnorePatterns: [
    // Transformation patterns for Jest to handle ES modules in node_modules.
    // Use the appropriate pattern based on your package manager:
    //
    // For npm:
    // 'node_modules/(?!@faker-js).+',
    //
    // For pnpm:
    'node_modules/.pnpm/.+/node_modules/(?!@faker-js).+',
    //
    // Important: Only one pattern matching Faker should be active at a time to ensure correct module transformation.
  ],
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.bundler.json',
      },
    ],
  },
};
