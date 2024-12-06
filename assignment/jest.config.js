export default {
  testEnvironment: "jsdom", // Use jsdom for testing React components
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "babel-jest", // Transpile JavaScript and TypeScript files
  },
  moduleNameMapper: {
    // Handle module aliases defined in vite.config.js
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|scss|sass)$": "identity-obj-proxy",
    // "^react$": "react",
    // "^react-dom$": "react-dom",
  },
  setupFilesAfterEnv: [
    // "@testing-library/jest-dom/extend-expect",
    "@testing-library/jest-dom",
  ],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)", // Match test files
    "**/?(*.)+(spec|test).[tj]s?(x)",
  ],
  // transformIgnorePatterns: [
  //   "node_modules/(?!(some-es-module|another-es-module)/)",
  // ],
};
