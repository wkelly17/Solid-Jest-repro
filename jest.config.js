/** @type {import('jest').Config} */

export default {
  verbose: true,
  modulePaths: ["<rootDir>"],
  extensionsToTreatAsEsm: [".jsx", ".ts", ".tsx"],
  testEnvironment: "jest-environment-jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["browser"],
  },
};
