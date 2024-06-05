import React from 'react';
import '../src/index.css';
import CreateQuestionForm from './components/CreateQuestionForm/CreateQuestionsForm';
import QuestionCard from './components/QuestionCard/QuestionCard';
import type { QuestionCardProps } from './components/QuestionCard/QuestionCard';
import Sidebar from './components/Sidebar/Sidebar';

// mock question to test functionality of QuestionCard component
const question: QuestionCardProps = {
	id: 1,
	category: 'History',
	difficulty: 'easy',
	question: 'When was the First World War?',
	options: ['1914', '1915', '1916', '1917'],
	answer: '1914',
	favourited: false,
	completed: false,
	timestamp: '2023-04-01T10:00:00Z',
};

function App() {
	/* const [showUI, setShowUI] = React.useState({
		Navbar: true,
		UserAvatar: true,
		FilterQuestions: false,
		QuestionStream: false,
		QuestionForm: false,
	}); */

	// const handleUIChange = () => {
	// 	setShowUI(showUI);
	// };

	return (
		<React.Fragment>
			<div className='main'>
				<h1>best team in the history of FAC</h1>
				<Sidebar/>

			

				<div>
					<QuestionCard
						questionCard={question}
						/* toggleDisplay={() => setShowUI} */
					/>
				</div>

				<div>
					<CreateQuestionForm />
				</div>
			</div>
		</React.Fragment>
	);
}

export default App;
