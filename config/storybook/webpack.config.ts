import { Configuration, DefinePlugin, RuleSetRule } from 'webpack';
import path from 'path';
import { BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../build/loaders/buildCssLoader';
import { buildSvgLoader } from '../build/loaders/buildSvgLoader';

export default ({ config }: { config: Configuration }) => {
  const paths: BuildPaths = {
    build: path.resolve(__dirname, '..', '..', 'build'),
    entry: '',
    html: '',
    src: path.resolve(__dirname, '..', '..', 'src'),
    locales: path.resolve(__dirname, '..', '..', 'public', 'locales'),
    buildLocales: path.resolve(__dirname, '..', '..', 'build', 'locales'),
  };
  config.resolve?.modules?.push(paths.src);
  config.resolve?.extensions?.push('ts', 'tsx');
  config.module?.rules?.push(buildCssLoader(true));

  if (config?.module?.rules) {
    // eslint-disable-next-line no-param-reassign
    config.module.rules = config?.module?.rules?.map((rule) => {
      const { test } = rule as RuleSetRule;
      if (/svg/.test(test as string)) {
        return { ...(rule as RuleSetRule), exclude: /\.svg$/i };
      }

      return rule;
    });
  }

  config.plugins?.push(
    new DefinePlugin({
      __IS_DEV__: JSON.stringify(true),
      __API_URL__: JSON.stringify(''),
      __PROJECT__: JSON.stringify('storybook'),
    }),
  );

  config.module?.rules?.push(buildSvgLoader());

  return config;
};
