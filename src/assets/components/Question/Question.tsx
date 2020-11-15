import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { setAllToFalse, setIsRight, setIsWrong } from '../../state/reducers/questionsReducer/actions'
import { TApp } from '../../state/reducers/rootReducer'

export const Question: React.FC<{ id: number }> = ({ id }) => {
	const questions = useSelector((state: TApp) => state.questions)
	const dispatch = useDispatch()
	const history = useHistory()

	const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const selectedAnswer = questions[id].answers.find(anwser => anwser.isSelected)

		if (selectedAnswer) {
			if (selectedAnswer.isCorrect) {
				dispatch(setIsRight(id, selectedAnswer))

				if (id !== questions.length - 1) {
					setTimeout(() => {
						dispatch(setAllToFalse(id))
						history.push(`question${id + 1}`)
					}, 2000)
				} else {
					setTimeout(() => {
						dispatch(setAllToFalse(id))
						history.push(`congratulations`)
					}, 2000)
				}
			} else {
				dispatch(setIsWrong(id, selectedAnswer))
			}
		}
	}

	const clickHandler = (answerId: number) => {
		dispatch(setAllToFalse(id, answerId))
	}

  return (
    <div className="quiz__form form-quiz">
      <div className="form-quiz__question">{questions[id].title}</div>
      <form className="form-quiz__body" action="#" onSubmit={submitHandler}>
        <div className="form-quiz__answers">
					{questions[id].answers.map(answer => (
						<div
							className={`
								form-quiz__answer
								${answer.isSelected ? '_selected' : ''}
								${answer.isRight ? '_right' : ''}
								${answer.isWrong ? '_wrong' : ''}
							`}
							key={answer.id} 
							onClick={() => clickHandler(answer.id)}
						>
							{answer.title}
						</div>
					))}
        </div>
        <button className="form-quiz__button" type="submit">
          check
        </button>
      </form>
    </div>
  )
}
