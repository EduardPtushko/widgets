module.exports = {
    roots: ['<rootDir>/src', '<rootDir>/test/'],
    preset: 'ts-jest',

    verbose: true,
    transform: {
        '^.+\\.(js|ts)x?$': 'babel-jest',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    setupFilesAfterEnv: [
        '<rootDir>/test/setupTests.js',
        '@testing-library/jest-dom/extend-expect',
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/__mocks__/fileMock.js',
        '\\.(css|less|scss)$': 'identity-obj-proxy',
    },
};
