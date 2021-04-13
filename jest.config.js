module.exports = {
  clearMocks: true,
  collectCoverageFrom: ['src/**/*.js', !'src/**/index.js', !'src/**/*.test.js'],
  coverageDirectory: 'reports',
  coverageThreshold: {
    global: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    }
  },
  reporters: ['default', 'jest-junit'],
  setUpFiles: [],
  testMatch: ['src/**/*.test.js'],
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {},
  testURL: 'http://localhost',
  transform: {
    '.+\\.js$': '<rootDir>/test/jestBabelTransformer.js'
  },
  moduleFileExtensions: ['js'],
  moduleNameMapper: {
    '^store(.*)$': '<rootDir>/src/store$1',
    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^pages/(.*)$': '<rootDir>/src/pages/$1',
    '^utils(.*)$': '<rootDir>/src/utils$1',
    '\\.(css|scss)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|svg|ttf)$': '<rootDir>/test/fileMock.js'
  },
  setUpFilesAfterEnv: ['<rootDir>/test/setupTests.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
  globalSetup: '<rootDir>/test/globalSetup.js'
};
