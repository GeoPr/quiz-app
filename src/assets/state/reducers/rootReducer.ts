import { questionsReducer } from './questionsReducer/questionsReducer';
import { combineReducers } from "redux";

export const rootReducer = combineReducers({
	questions: questionsReducer
})

export type TApp = ReturnType<typeof rootReducer>

type TProperties<T> = T extends {
	[key: string]: infer U
} ? U : never

export type TActions<T extends {
	[key: string]: (...args: any[]) => any
}> = ReturnType<TProperties<T>>