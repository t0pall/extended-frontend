export enum ArticleBlockType {
  IMAGE = 'IMAGE',
  CODE = 'CODE',
  TEXT = 'TEXT',
}

export interface ArticleBlockBase {
  id: string;
  type: ArticleBlockType;
}

export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT;
  paragraphs: string[];
  title?: string;
}

export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE;
  src: string;
  title: string;
}

export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE;
  code: string;
}

export type ArticleBlock =
  | ArticleTextBlock
  | ArticleImageBlock
  | ArticleCodeBlock;

export enum ArticleType {
  IT = 'IT',
  SCIENCE = 'SCIENCE',
  ECONOMICS = 'ECONOMICS',
}

export interface Article {
  id: string;
  title?: string;
  subtitle?: string;
  img?: string;
  views?: number;
  createdAt?: string;
  types?: ArticleType[];
  blocks?: ArticleBlock[];
}

export enum ArticleView {
  BIG = 'big',
  SMALL = 'small',
}
