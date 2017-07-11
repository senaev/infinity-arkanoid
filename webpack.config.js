const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist/'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: [
                    `babel-loader?${JSON.stringify({
                        plugins: [
                            'es6-promise',
                            'transform-undefined-to-void'
                        ]
                    })}`,
                    `awesome-typescript-loader?${JSON.stringify({
                        tsconfig: './tsconfig.json',
                        outFile: ''
                    })}`
                ]
            }
        ]
    }
};
