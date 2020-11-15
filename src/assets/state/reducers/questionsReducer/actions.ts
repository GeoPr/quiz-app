import { IAnswer } from './questionsReducer';
import { SET_IS_RIGHT, SET_IS_WRONG, SET_ALL_TO_FALSE } from './types';

export const setIsRight = (id: number, selectedAnswer: IAnswer) => ({
	type: SET_IS_RIGHT,
	payload: { id, selectedAnswer }
} as const)

export const setIsWrong = (id: number, selectedAnswer: IAnswer) => ({
	type: SET_IS_WRONG,
	payload: { id, selectedAnswer }
} as const)

export const setAllToFalse = (id: number, answerId: number = 0) => ({
	type: SET_ALL_TO_FALSE,
	payload: { id, answerId }
} as const)