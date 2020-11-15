import { TActions } from '../rootReducer';
import { SET_IS_RIGHT, SET_IS_WRONG, SET_ALL_TO_FALSE } from './types'
import * as actions from './actions'

export interface IAnswer {
  id: number
  title: string
  isCorrect: boolean
  isSelected: boolean
  isWrong: boolean
  isRight: boolean
}

export interface IQuestion {
  id: number
  title: string
  answers: Array<IAnswer>
}

type ActionsTypes = TActions<typeof actions>

const initalState = Array.from({ length: 3 })
  .fill('')
  .map((_, idx) => ({
    id: idx,
    title: `Question ${idx}`,
    answers: new Array(4).fill('').map((_, idx) => ({
      id: idx + 1,
      title: `answer ${idx + 1}`,
      isCorrect: Math.random() > 0.5 ? false : true,
      isSelected: false,
      isWrong: false,
      isRight: false,
    })),
  }))

export const questionsReducer = (
  state: Array<IQuestion> = initalState,
  action: ActionsTypes,
): Array<IQuestion> => {
  switch (action.type) {
    case SET_IS_RIGHT: {
			const { id, selectedAnswer } = action.payload

      return state.map(question => {
        if (question.id === id) {
          question.answers.map(answer => {
            if (answer === selectedAnswer) {
              answer.isRight = true
            }

            return answer
          })
        }

        return question
      })
    }

    case SET_IS_WRONG: {
			const { id, selectedAnswer } = action.payload
			
			return state.map(question => {
				if (question.id === id) {
					question.answers.map(answer => {
						if (answer === selectedAnswer) {
							answer.isWrong = true
						}

						return answer
					})
				}

				return question
			})
		}
		
		case SET_ALL_TO_FALSE: {
			const { id, answerId } = action.payload
			
			return state.map(question => {
				if (question.id === id) {
					question.answers.map(answer => {
						answer.isSelected = false
						answer.isRight = false
						answer.isWrong = false

						if (!!answerId) {
							answer.id === answerId && (answer.isSelected = !answer.isSelected)
						}

						return answer
					})
				}

				return question
			})
		}

    default: return state
  }
}
