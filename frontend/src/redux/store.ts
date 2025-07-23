import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';

// 空的初始状态
const initialState = {};

// 最简reducer - 只返回当前状态
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const rootReducer = (state = initialState, _action: { type: string }) => {
  return state;
};

// 创建store
export const store = configureStore({
  reducer: rootReducer,
});

// 类型定义
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// 自定义hooks
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
