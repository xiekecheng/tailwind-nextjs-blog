---
#title: 在React中集成Redux/toolkit
#date: 2021-10-09 14:04:00
#categories: JavaScript
index_img:

title: 在React中集成Redux/toolkit
date: '2021-10-09'
tags: ['React', 'Redux']
draft: false
summary: '在React中集成Redux/toolkit'
authors: ['default']
---

## 集成 Reduxjs/toolkit

### 定义根 Store

```ts
// store.js
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {},
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```

### 定义子 Reducer

```js
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
// import type { RootState } from '../../app/store'

// Define a type for the slice state
interface CounterState {
  value: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  value: 0,
}

// 使用createAsyncThunk处理异步任务，比如调接口
export const fetchUserById = createAsyncThunk('users/fetchByIdStatus', async (userId, thunkAPI) => {
  const response = await userAPI.fetchById(userId)
  return response.data
})

export const counterSlice = createSlice({
  // Reducer名称
  name: 'counter',
  // 定义初始值
  initialState,
  // 定义同步方法
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchUserById.fulfilled, (state, action) => {
      // Add user to the state array
      state.entities.push(action.payload)
    })
  },
})

// 抛出同步方法
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
```

### 在 Store 中挂载 Reducer

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
})

// 使用ts需要使用以下两个来定义useSelector和useDispatch的类型
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
```

### 定义 hooks.ts

在页面中需要使用者两个来调用

```ts
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
```

### 在组件中使用方法

```js
import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from 'app/hooks'

import { decrement, increment } from './counterSlice'

export function Counter() {
  // 获取redux中value的值
  const count = useAppSelector((state) => state.counter.value)
  // dispatch 调用方法
  const dispatch = useAppDispatch()

  // omit rendering logic
}
```

### 在根节点注入 redux

Provider 注入，然后属性添加 store

```ts
// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { store } from './app/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
```
