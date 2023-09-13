export type BuildMode = 'production' | 'development';
export type ProjectType = 'frontend' | 'storybook' | 'jest';

export interface BuildPaths {
  entry: string;
  build: string;
  html: string;
  src: string;
}

export interface BuildEnv {
  mode: BuildMode;
  port: number;
  api_url: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  apiUrl: string;
  port: number;
  project: ProjectType;
}
