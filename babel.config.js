module.exports = {
    babelrcRoots: [
        './js/platform/*',
        './js/plugins/*'
    ],
    presets: [
        '@babel/preset-env',
        '@babel/preset-react'
    ],
    plugins: [
        '@babel/plugin-proposal-class-properties',
        '@babel/plugin-proposal-object-rest-spread',
        '@babel/plugin-transform-runtime',
        'react-hot-loader/babel'
    ]
};
