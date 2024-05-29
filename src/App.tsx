import React from 'react';
import '../src/index.css';
import Button from './components/Button/Button';
import CreateQuestionForm from './components/CreateQuestionForm/CreateQuestionsForm';
import QuestionCard from './components/QuestionCard/QuestionCard';

function App() {
	return (
		<React.Fragment>
			<div className='main'>
				<h1>best team in the history of FAC</h1>
				<Button
					btnclassName='btnPrimary'
					btnText='yolo'
					btnonClick={() => false}
				/>
				<Button
					btnclassName='btnSecondary'
					btnText='dolo'
					btnonClick={() => false}
				/>
				<div>
					<QuestionCard />
				</div>
				<div>
					<CreateQuestionForm />
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
