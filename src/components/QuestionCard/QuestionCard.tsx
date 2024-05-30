import React from 'react';
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
	const context = React.useContext(UserContext);

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

	React.useEffect(() => {
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
		<div className='questionCard'>
			<div className='questionCardHeader'>
				<div className='questionCardCategory'>
					<span className='boxSecondary'>
						{/*category || */ 'Category Here'}
					</span>
					<span className='boxSecondary'>
						{/*difficulty || */ 'Difficulty Here'}
					</span>
				</div>
				<div className='questionCardCustomBtns'>
					<button className='btnTernary'>
						<img
							className='icon'
							src='/pencil.svg'
							aria-label='Edit question'
						></img>
					</button>
					<button className='btnTernary'>
						<img
							className='icon'
							src='/star.svg'
							aria-label='Mark as favourite'
						></img>
					</button>
				</div>
			</div>
			<div className='questionCardGrid'>
				<div className='questionCardGridRow'>
					{/*question || */ 'Here is the question'}
				</div>
				<div className='questionCardGridRow'>
					<div className='questionCardAnswer'>
						{/*options[0] || */ 'Answer A'}
					</div>
					<div className='questionCardAnswer'>
						{/*options[1] || */ 'Answer B'}
					</div>
				</div>
				<div className='questionCardGridRow'>
					<div className='questionCardAnswer'>
						{/* options[2] ||  */ 'Answer C'}
					</div>
					<div className='questionCardAnswer'>
						{/* options[3] ||  */ 'Answer D'}
					</div>
				</div>
				<div className='questionCardBtnRow'>
					{/* <Button
						btnText='Delete'
						btnonClick={() => void}
						btnclassName='btnSecondary'
					></Button>
					<Button
						btnText='Submit'
						btnonClick={() => void}
						btnclassName='btnPrimary'
					></Button> */}
				</div>
			</div>
			{/* <h3>QuestionCard</h3>
			<p>this is using the contextApi methods</p>
			{user && <p>{user.totalQuestionsAnswered}</p>} */}
		</div>
	);
}
