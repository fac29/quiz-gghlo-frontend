import { useEffect, useContext } from 'react';
import { UserContext } from '../GameState';
import './QuestionCard.css';
import Button from '../Button/Button';
import '../Button/Button.css';

export type QuestionCardProps = {
	id: number;
	category: string;
	difficulty: 'easy' | 'medium' | 'hard';
	question: string;
	options: [string, string, string, string];
	answer: string;
	favourited: boolean;
	completed: boolean;
};

export default function QuestionCard(/*questionCard: QuestionCardProps*/) {
	const context = useContext(UserContext);

	// const {
	// 	id,
	// 	category,
	// 	difficulty,
	// 	question,
	// 	options,
	// 	answer,
	// 	favourited,
	// 	completed,
	// } = questionCard;

	useEffect(() => {
		if (user) {
			setUser({
				...user,
				totalQuestionsAnswered: (user.totalQuestionsAnswered || 0) + 3,
			});
		}
	}, []);

	if (!context) {
		return <div>Loading...</div>;
	}

	const { user, setUser } = context;

	return (
		<div className='question-card'>
			<div className='question-card-header'>
				<div className='question-card-category'>
					<span className='box-secondary'>{/*category || */ 'Category'}</span>
					<span className='box-secondary'>
						{/*difficulty || */ 'Difficulty'}
					</span>
				</div>
				<div className='question-card-custom-btns'>
					<button className='btn-ternary'>
						<img
							className='icon'
							src='/pencil.svg'
							aria-label='Edit question'
						></img>
					</button>
					<button className='btn-ternary'>
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
					{/*question || */ 'Here is the question'}
				</div>
				<button className='question-card-answer'>
					{/*options[0] || */ 'Answer A'}
				</button>
				<button className='question-card-answer'>
					{/*options[1] || */ 'Answer B'}
				</button>
				<button className='question-card-answer'>
					{/* options[2] ||  */ 'Answer C'}
				</button>
				<button className='question-card-answer'>
					{/* options[3] ||  */ 'Answer D'}
				</button>
			</div>
			<div className='question-card-footer'>
				<button>Delete</button>
				<button>Submit</button>
				{/* <Button
					btnText='Delete'
					btnonClick={handleDeleteBtn}
					btnclassName='btnSecondary'
				></Button>
				<Button
					btnText='Submit'
					btnonClick={handleSubmitBtn}
					btnclassName='btnPrimary'
				></Button> */}
			</div>
			{/* <h3>QuestionCard</h3>
			<p>this is using the contextApi methods</p>
			{user && <p>{user.totalQuestionsAnswered}</p>} */}
		</div>
	);
}
