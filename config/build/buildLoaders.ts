import { RuleSetRule } from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoader';
import { BuildOptions } from './types/config';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildBabelLoader';

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const typescryptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const svgLoader = buildSvgLoader();

  const babelLoader = buildBabelLoader(isDev);

  const scssLoader = buildCssLoader(isDev);

  return [fileLoader, svgLoader, babelLoader, typescryptLoader, scssLoader];
}
