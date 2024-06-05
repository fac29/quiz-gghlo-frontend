import React, { useState, useEffect, FormEvent } from 'react';
import './CreateQuestionForm.css';
import Button from '../Button/Button';

type formProp = {
	formData?: {
		id: number;
		category: string;
		difficulty: 'Easy' | 'Medium' | 'Hard';
		question: string;
		options: [string, string, string, string];
		answer: string;
		favourited: boolean;
		completed: boolean;
	};
	isEdit?: boolean;
};

export default function CreateQuestionForm({
	formData,
	isEdit = false,
}: formProp) {
	const [questionText, setQuestionText] = useState('');
	const [options, setOptions] = useState(['', '', '', '']);
	const [correctAnswer, setCorrectAnswer] = useState('');
	const [category, setCategory] = useState('');
	const [difficulty, setDifficulty] = useState<'Easy' | 'Medium' | 'Hard'>(
		'Easy'
	);
	const [wordCount, setWordCount] = useState('');

	useEffect(() => {
		if (formData) {
			setQuestionText(formData.question);
			setOptions(formData.options);
			setCorrectAnswer(formData.answer);
			setCategory(formData.category);
			setDifficulty(formData.difficulty);
		}
	}, [formData]);

	function handleFormSubmission(event: FormEvent) {
		event.preventDefault();
		const data = {
			id: formData?.id,
			question: questionText,
			options,
			answer: correctAnswer,
			category,
			difficulty,
			favourited: formData?.favourited ?? false,
			completed: formData?.completed ?? false,
		};

		if (isEdit) {
			// Handle PUT request
			console.log('PUT request:', data);
		} else {
			// Handle POST request
			console.log('POST request:', data);
		}
	}

	function handleButtonCancel() {
		console.log('Cancelled');
	}

	function handleOptionChange(index: number, value: string) {
		const newOptions = [...options];
		newOptions[index] = value;
		setOptions(newOptions);
	}

	return (
		<React.Fragment>
			<form onSubmit={handleFormSubmission} className='formCreatePrimary'>
				<label className='formLabel' htmlFor='questionText'>
					Question:
				</label>
				<textarea
					className='formInput'
					name='questionText'
					placeholder='Type in new question'
					maxLength={300}
					value={questionText}
					onChange={(e) => {
						setWordCount(e.target.value);
						setQuestionText(e.target.value);
					}}
				></textarea>
				<p id='textareaCharactersText'>
					{300 - wordCount.length}/300 CHARACTERS LEFT
				</p>
				<div className='formGroupRow-horizontal'>
					<div className='formItem'>
						<label className='formLabel' htmlFor='questionOptionA'>
							Option A
						</label>
						<input
							className='formInput'
							name='questionOptionA'
							type='text'
							placeholder='Type in option A'
							value={options[0]}
							onChange={(e) => handleOptionChange(0, e.target.value)}
						/>
					</div>
					<div className='formItem'>
						<label className='formLabel' htmlFor='questionOptionB'>
							Option B
						</label>
						<input
							className='formInput'
							name='questionOptionB'
							type='text'
							placeholder='Type in option B'
							value={options[1]}
							onChange={(e) => handleOptionChange(1, e.target.value)}
						/>
					</div>
					<div className='formItem'>
						<label className='formLabel' htmlFor='questionOptionC'>
							Option C
						</label>
						<input
							className='formInput'
							name='questionOptionC'
							type='text'
							placeholder='Type in option C'
							value={options[2]}
							onChange={(e) => handleOptionChange(2, e.target.value)}
						/>
					</div>
					<div className='formItem'>
						<label className='formLabel' htmlFor='questionOptionD'>
							Option D
						</label>
						<input
							className='formInput'
							name='questionOptionD'
							type='text'
							placeholder='Type in option D'
							value={options[3]}
							onChange={(e) => handleOptionChange(3, e.target.value)}
						/>
					</div>
				</div>
				<div className='formGroupRow-horizontal'>
					<label htmlFor='correctAnswerOptions'>Correct Answer:</label>
					<input
						className='formInput'
						name='radioAnswerOption'
						type='radio'
						value={options[0]}
						onChange={(e) => setCorrectAnswer(e.target.value)}
					/>
					<label htmlFor='radioAnswerOption'>Option A</label>
					<input
						className='formInput'
						name='radioAnswerOption'
						type='radio'
						value={options[1]}
						onChange={(e) => setCorrectAnswer(e.target.value)}
					/>
					<label htmlFor='radioQuestionOptionB'>Option B</label>
					<input
						className='formInput'
						name='radioAnswerOption'
						type='radio'
						value={options[2]}
						onChange={(e) => setCorrectAnswer(e.target.value)}
					/>
					<label htmlFor='radioQuestionOptionC'>Option C</label>
					<input
						className='formInput'
						name='radioAnswerOption'
						type='radio'
						value={options[3]}
						onChange={(e) => setCorrectAnswer(e.target.value)}
					/>
					<label htmlFor='radioQuestionOptionD'>Option D</label>
				</div>
				<div className='formGroupRow-horizontal'>
					<div className='formItem'>
						<label className='formLabel' htmlFor='categories'>
							Select category:
						</label>
						<input
							className='formInput'
							name='categories'
							type='text'
							placeholder='enter category eg. Music'
							value={category}
							onChange={(e) => setCategory(e.target.value)}
						/>
					</div>
					<div className='formItem'>
						<label className='formLabel' htmlFor='difficulty'>
							Select difficulty:
						</label>
						<select
							className='formInput'
							name='difficulty'
							value={difficulty}
							onChange={(e) =>
								setDifficulty(e.target.value as 'Easy' | 'Medium' | 'Hard')
							}
						>
							<option value='Easy'>Easy</option>
							<option value='Medium'>Medium</option>
							<option value='High'>High</option>
						</select>
					</div>
				</div>
				<div className='formGroupRow-horizontal'>
					<Button
						btnclassName='btnPrimary'
						btnText='Cancel'
						btnonClick={handleButtonCancel}
					/>
					<Button
						btnclassName='btnPrimary'
						btnText='Submit'
						btnonClick={() => handleFormSubmission}
					/>
				</div>
			</form>
		</React.Fragment>
	);
}
