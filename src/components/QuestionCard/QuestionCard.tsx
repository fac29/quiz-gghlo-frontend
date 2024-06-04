import { useEffect, useContext, useState, MouseEvent } from 'react';
import { UserContext } from '../GameState';
import './QuestionCard.css';
import Button from '../Button/Button';
import '../Button/Button.css';
import { deleteQuestion, updateQuestion } from '../../utils/utils.ts';

export type QuestionCardProps = {
	id: number;
	category: string;
	difficulty: 'easy' | 'medium' | 'hard';
	question: string;
	options: string[];
	correctAnswer: string;
	favourited: boolean;
	completed: boolean;
};

export default function QuestionCard(props: {
	questionCard: QuestionCardProps;
}) {
	const context = useContext(UserContext);
	const [selectAnswer, setSelectAnswer] = useState('');
	const [showSubmitButton, setShowSubmitButton] = useState(true);
	const [user, setUser] = useState(context);

	const {
		id,
		category,
		difficulty,
		question,
		options,
		correctAnswer,
		// favourited,
		// completed,
	} = props.questionCard;

	// useEffect(() => {
	// 	if (user) {
	// 		setUser({
	// 			...user,
	// 			totalQuestionsAnswered: (user.totalQuestionsAnswered || 0) + 3,
	// 		});
	// 	}
	// }, []);

	if (!context) {
		return <div>Loading...</div>;
	}

	function handleAnswerSubmission(event: MouseEvent) {
		event.preventDefault();

		const answerOptions = Array.from(
			document.querySelectorAll('.question-card-answer')
		);
		const correctAnswer = answerOptions.find((option) => {
			if (option instanceof HTMLElement) {
				return option.dataset.correct === 'true';
			}
		}) as HTMLInputElement;

		const selectedAnswer = answerOptions.find((option) => {
			if (option.value === selectAnswer) {
				return option;
			}
		}) as HTMLInputElement;

		if (selectAnswer === correctAnswer.value) {
			selectedAnswer.classList.add('correct');
			updateQuestion(id);
			setShowSubmitButton(!showSubmitButton);
		} else {
			correctAnswer.classList.add('correct');
			selectedAnswer.classList.add('incorrect');
			setShowSubmitButton(!showSubmitButton);
		}
	}

	function handleEditQuestion(event: MouseEvent) {
		event.preventDefault();
	}

	function handleFavouriteQuestion(event: MouseEvent) {
		event.preventDefault();
	}

	return (
		<div className='question-card'>
			<div className='question-card-header'>
				<div className='question-card-category'>
					<span className='box-secondary'>{category || 'Category'}</span>
					<span className='box-secondary'>{difficulty || 'Difficulty'}</span>
				</div>
				<div className='question-card-custom-btns'>
					<button className='btn-ternary' onClick={handleEditQuestion}>
						<img
							className='icon'
							src='/pencil.svg'
							aria-label='Edit question'
						></img>
					</button>
					<button className='btn-ternary' onClick={handleFavouriteQuestion}>
						<img
							className='icon'
							src='/star.svg'
							aria-label='Mark as favourite'
						></img>
					</button>
				</div>
			</div>
			<div className='question-card-grid'>
				<div className='question-card-grid-header'>
					{question || 'Here is the question'}
				</div>
				{options.map((option, i) => {
					return (
						<button
							onClick={() => setSelectAnswer(option)}
							className={`question-card-answer ${
								selectAnswer === option ? 'active' : ''
							}`}
							value={option}
							data-correct={option === correctAnswer ? true : false}
							key={i}
						>
							{option}
						</button>
					);
				})}
			</div>
			<div className='question-card-footer'>
				<Button
					btnText='Delete'
					btnonClick={() => deleteQuestion(id)}
					btnclassName='btnSecondary'
				/>
				{/* Pass in selectAnswer to the submit function */}
				{showSubmitButton && (
					<Button
						btnText='Submit'
						btnonClick={handleAnswerSubmission}
						btnclassName='btnPrimary'
					/>
				)}
			</div>
			{/* <h3>QuestionCard</h3>
			<p>this is using the contextApi methods</p>
			{user && <p>{user.totalQuestionsAnswered}</p>} */}
		</div>
	);
}
