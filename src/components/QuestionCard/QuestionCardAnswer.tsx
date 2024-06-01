import { useEffect, useState, MouseEvent } from 'react';
import './QuestionCardAnswer.css';

type AnswerProps = {
	answer: string;
	index: number;
};

const placeholder: string[] = ['Answer A', 'Answer B', 'Answer C', 'Answer D'];

function handleAnswerSelection(event: MouseEvent) {
	event.preventDefault();
	const target = event.target as HTMLElement;
	target.classList.add('active');
}

export default function QuestionCardAnswer(props: AnswerProps) {
	const [selectAnswer, setSelectAnswer] = useState(false);

	return (
		<button className='question-card-answer' onClick={handleAnswerSelection}>
			{props.answer || placeholder[props.index]};
		</button>
	);
}
