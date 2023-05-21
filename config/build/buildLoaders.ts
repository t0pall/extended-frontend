import { RuleSetRule } from 'webpack';

export function buildLoaders(): RuleSetRule[] {
    const typescryptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    return [
        typescryptLoader,
    ]
};
