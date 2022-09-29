const baseConfig = require('../../jest.base.config');
// jest.config.js
module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testRunner: 'jest-circus',
    reporters: [
        'default',
        ['./../../node_modules/jest-html-reporter', {
            pageTitle: 'Test Report',
            outputPath: './doc/test/test-report.html'
        }]
    ],
    collectCoverageFrom: [
        "src/**/*.ts",
        "!src/**/*.spec.ts",
        "!src/**/*.type.ts",
        "!src/test/*.ts",
        "!**/node_modules/**",
    ],
    collectCoverage: true,
    coverageReporters: [
        "json",
        "text",
        "lcov",
        "clover",
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/",
        "/main\.ts",
        "/index\.ts",
        "/polyfills\.ts",
        "/*.\.module\.ts",
        "/*.\.mock\.ts",
        "/*.\.enum\.ts",
        "public-api.ts",
    ],
    coverageDirectory: './../../doc/test/coverage',
    coverageThreshold: {
        global: {
            branches: 60,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    globals: {
        window: {
            location: {
                href: 'http://testurl.noneexisting',
                origin: 'http://testurl.noneexisting',
            },
        },
        navigator: {
            language: 'de',
            platform: 'MacIntel',
            cookieEnabled: true,
            userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
            appName: 'Netscape',
            appCodeName: 'Mozilla',
            appVersion: '5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
        },
    },
    ...baseConfig
};
