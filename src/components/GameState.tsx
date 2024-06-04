/* import React, { createContext, useState, ReactNode } from 'react';

type UserScheme = {
	questions?: Array<object> | null;
	totalQuestionsAnswered?: number;
	totalCorrectAnswers?: number;
	currentCorrectAnswers?: number;
	currentQuestionsAnswered?: number;
	currentQuestionsRequested?: number;
};

type UserContextType = {
	user: UserScheme | null;
	setUser: React.Dispatch<React.SetStateAction<UserScheme | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);

export default function GameState({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<UserScheme | null>({
		questions: [],
		totalQuestionsAnswered: 0,
		totalCorrectAnswers: 0,
		currentCorrectAnswers: 0,
		currentQuestionsAnswered: 0,
		currentQuestionsRequested: 0,
	});

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
 */

import React from 'react';
import { UserScheme, UserContext } from './UserContext';

export default function GameState({ children }: { children: React.ReactNode }) {
	const [user, setUser] = React.useState<UserScheme | null>(null);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
