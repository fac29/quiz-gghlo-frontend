import { useState } from 'react';
import './QuestionCardAnswer.css';

type AnswerProps = {
	answer: string;
	index: number;
	correct: boolean;
	onClick: void;
};

const placeholder: string[] = ['Answer A', 'Answer B', 'Answer C', 'Answer D'];

export default function QuestionCardAnswer(props: AnswerProps) {
	const [selectAnswer, setSelectAnswer] = useState('');

	function handleAnswerSelection(str: string) {
		setSelectAnswer(str);
	}

	return (
		<button
			onClick={() => handleAnswerSelection(props.answer)}
			className={`question-card-answer ${
				selectAnswer === props.answer ? 'active' : ''
			}`}
			value={props.answer}
		>
			{props.answer || placeholder[props.index]}
		</button>
	);
}
