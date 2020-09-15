const isTest = String(process.env.NODE_ENV) === 'test';

module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                modules: isTest ? 'commonjs' : false,
                useBuiltIns: 'usage',
                corejs: '3.6',
            },
        ],
        '@babel/preset-react',
        '@babel/preset-typescript',
    ],
    plugins: [
        '@babel/plugin-proposal-nullish-coalescing-operator',
        '@babel/plugin-proposal-optional-chaining',
        'react-hot-loader/babel',
    ],
};
