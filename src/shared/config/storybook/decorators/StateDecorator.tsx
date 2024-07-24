import { StoryFn } from '@storybook/react';
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';
import { profileReducer } from 'entities/Profile';
import { ReducersList } from 'shared/lib/DynamicModuleLoader/DynamicModuleLoader';
import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { addCommentFormReducer } from 'features/AddCommentForm/model/slices/addCommentFormSlice';
import { ArticleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slice';
import { articlesPageReducer } from 'pages/ArticlesPage/model/slices/articlesPageSlice';
import { counterReducer } from 'entities/Counter';
import { scrollRestorationReducer } from 'features/ScrollRestoration';
import { userReducer } from 'entities/User';

const defaultAsyncReducers: ReducersList = {
  login: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addCommentForm: addCommentFormReducer,
  articleDetailsPage: ArticleDetailsPageReducer,
  articlesPage: articlesPageReducer,
  counter: counterReducer,
  scrollRestoration: scrollRestorationReducer,
  user: userReducer,
};

const StateDecorator = (
  state?: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList,
) => (StoryComponent: StoryFn) => (
  <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
    <StoryComponent />
  </StoreProvider>
);

export default StateDecorator;
