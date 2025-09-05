/**
 * @type {import("jest").Config}
 **/
module.exports = {
  testEnvironment: 'node',
  transformIgnorePatterns: ['node_modules\\/(?!(@faker-js\\/faker)\\/).+'],
  transform: {
    '^.+\\.(t|j)s$': [
      'ts-jest',
      {
        tsconfig: 'tsconfig.node20.json',
      },
    ],
  },
};
