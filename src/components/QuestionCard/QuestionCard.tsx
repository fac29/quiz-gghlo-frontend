import React from 'react';
import { UserContext } from '../GameState';
import './QuestionCard.css';

export default function QuestionCard() {
	const context = React.useContext(UserContext);

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
		<div>
			<h3>QuestionCard</h3>
			<p>this is using the contextApi methods</p>
			{user && <p>{user.totalQuestionsAnswered}</p>}
		</div>
	);
}
