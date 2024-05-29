import React from 'react';
import './CreateQuestionForm.css';

export default function CreateQuestionForm() {
	const [wordCount, SetWordCount] = React.useState('');
	async function handleFormSubmission() {
		event.preventDefault();
		console.log('CreateQuestion submitted');
	}

	return (
		<React.Fragment>
			<form action='submit' className='formCreatePrimary'>
				<label className='formLabel' htmlFor='questionText'>
					Input new question
				</label>
				<textarea
					name='questionText'
					placeholder='Type in new question'
					maxLength={300}
					onChange={(e) => SetWordCount(e.target.value)}
				></textarea>
				<p>{wordCount.length}/300</p>
				<label className='formLabel' htmlFor='questionOptionA'>
					Option A
				</label>
				<input
					name='questionOptionA'
					type='text'
					placeholder='Type in option A'
				/>
				<label className='formLabel' htmlFor='questionOptionB'>
					Option B
				</label>
				<input
					name='questionOptionB'
					type='text'
					placeholder='Type in option B'
				/>
				<label className='formLabel' htmlFor='questionOptionC'>
					Option C
				</label>
				<input
					name='questionOptionC'
					type='text'
					placeholder='Type in option C'
				/>
				<label className='formLabel' htmlFor='questionOptionD'>
					Option D
				</label>
				<input
					name='questionOptionD'
					type='text'
					placeholder='Type in option D'
				/>
				<div className='formGroupRow'>
					<label htmlFor='correctAnswerOptions'>Correct Answer:</label>
					<label htmlFor='radioAnswerOption'>Option A</label>
					<input name='radioAnswerOption' type='radio' value='option A' />
					<label htmlFor='radioQuestionOptionB'>Option B</label>
					<input name='radioAnswerOption' type='radio' value='option B' />
					<label htmlFor='radioQuestionOptionC'>Option C</label>
					<input name='radioAnswerOption' type='radio' value='option C' />
					<label htmlFor='radioQuestionOptionD'>Option D</label>
					<input name='radioAnswerOption' type='radio' value='option D' />
				</div>
				<label className='formLabel' htmlFor='categories'>
					Select category
				</label>
				<input
					name='categories'
					type='text'
					placeholder='enter category eg. Music'
				/>
				<label className='formLabel' htmlFor='difficulty'>
					Select difficulty
				</label>
				<select name='difficulty'>
					<option value='Easy'>Easy</option>
					<option value='Medium'>Medium</option>
					<option value='High'>High</option>
				</select>
				<button type='submit' onClick={handleFormSubmission}>
					Create Question
				</button>
			</form>
		</React.Fragment>
	);
}
