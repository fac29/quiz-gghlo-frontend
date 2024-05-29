// import React from 'react';
import { createContext, useState, useContext, ReactNode } from 'react';

type UserScheme = {
	questions?: Array<object> | null;
	totalQuestionsAnswered?: number;
	totalCorrectAnswers?: number;
	currentCorrectAnswers?: number;
	currentQuestionsAnswered?: number;
	currentQuestionsRequested?: number;
};

export const UserContext = createContext<UserScheme | null>(null);

export default function GameState({ children }: { children: ReactNode }) {
	const currentUser = useContext(UserContext);

	const [current, setCurrent] = useState<UserScheme | null>(currentUser);

	return (
		<UserContext.Provider value={{ ...current, ...setCurrent }}>
			{children}
		</UserContext.Provider>
	);
}
