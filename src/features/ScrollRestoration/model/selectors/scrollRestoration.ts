import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';

export const getScrollRestorationScroll = (state: StateSchema) => state.scrollRestoration.scroll;
export const getScrollRestorationScrollByPath = createSelector(
  getScrollRestorationScroll,
  (_state: StateSchema, path: string) => path,
  (scroll, path) => scroll[path] || 0,

);
