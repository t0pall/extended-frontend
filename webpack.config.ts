import { Configuration } from "webpack";
import { BuildPaths } from './config/build/types/config';
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    dist: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
};

const mode = 'development';
const isDev = mode === 'development';

const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev
});

export default config;
