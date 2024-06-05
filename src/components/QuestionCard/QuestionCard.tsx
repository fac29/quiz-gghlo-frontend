import { useState, MouseEvent } from 'react';

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
	answer: string;
	favourited: boolean;
	completed: boolean;
	timestamp: string;
};

export default function QuestionCard(props: {
	questionCard: QuestionCardProps;
	//toggleDisplay: () => {};
}) {
	//const context = useContext(UserContext);
	// const { user, setUser } = useContext(UserContext);
	const [selectAnswer, setSelectAnswer] = useState('');
	const [showSubmitButton, setShowSubmitButton] = useState(true);

	const {
		id,
		category,
		difficulty,
		question,
		options,
		answer,
		favourited,
		timestamp,
	} = props.questionCard;

	// useEffect(() => {
	// 	if (user) {
	// 		setUser({
	// 			...user,
	// 			totalQuestionsAnswered: (user.totalQuestionsAnswered || 0) + 3,
	// 		});
	// 	}
	// }, []);

	// if (!context) {
	// 	return <div>Loading...</div>;
	// }

	function handleAnswerSubmission(event: MouseEvent) {
		event.preventDefault();

		const answerOptions = Array.from(
			document.querySelectorAll('.question-card-answer')
		);
		const inputAnswer = answerOptions.find((option) => {
			if (option instanceof HTMLElement) {
				return option.dataset.correct === 'true';
			}
		}) as HTMLInputElement;

		const selectedAnswer = answerOptions.find((option) => {
			if (option instanceof HTMLInputElement) {
				if (option.value === selectAnswer) {
					return option;
				}
			}
		}) as HTMLInputElement;

		if (selectAnswer === inputAnswer.value) {
			selectedAnswer.classList.add('correct');
			updateQuestion({
				id,
				category,
				difficulty,
				question,
				options,
				answer,
				favourited,
				completed: true,
				timestamp,
			});
			// need to pass in that the question is completed
			setShowSubmitButton(!showSubmitButton);
		} else {
			inputAnswer.classList.add('correct');
			selectedAnswer.classList.add('incorrect');
			setShowSubmitButton(!showSubmitButton);
		}
	}

	function handleEditQuestion(event: MouseEvent) {
		event.preventDefault();

		// bring up edit question form pre-populated with existing question
	}

	function handleFavouriteQuestion(event: MouseEvent) {
		event.preventDefault();

		// use gamestate to update User.oneQuestion
		// setUser(user: UserScheme => ({
		// 			...user,
		// 			totalQuestionsAnswered: user.totalQuestionsAnswered + 1,
		// 			// Add other updates as needed
		// 		})
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
							data-correct={option === answer ? true : false}
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
					btnonClick={() => deleteQuestion(1)}
					btnclassName='btnSecondary'
				/>

				{showSubmitButton && (
					<Button
						btnText='Submit'
						btnonClick={() => handleAnswerSubmission}
						btnclassName='btnPrimary'
					/>
				)}
			</div>
		</div>
	);
}
