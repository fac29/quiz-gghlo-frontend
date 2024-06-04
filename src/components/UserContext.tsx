// UserContext.tsx
import { createContext } from 'react';

export type singleQuestion = {
	id: number;
	category: string;
	difficulty: 'easy' | 'medium' | 'hard';
	question: string;
	options: string[];
	answer: string;
	favourited: boolean;
	completed: boolean;
	timestamp: string;
};

export type UserScheme = {
	oneQuestion: singleQuestion | null;
	questions: Array<singleQuestion> | null;
	totalQuestionsAnswered: number;
	totalCorrectAnswers: number;
	currentCorrectAnswers: number;
	currentQuestionsAnswered: number;
	currentQuestionsRequested: number;
};

type UserContextType = {
	user: UserScheme | null;
	setUser: React.Dispatch<React.SetStateAction<UserScheme | null>>;
};

export const UserContext = createContext<UserContextType | null>(null);
