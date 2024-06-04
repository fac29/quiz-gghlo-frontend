export const deleteQuestion = async (id: number) => {
	try {
		const response = await fetch(`http://localhost:3210/questions/${id}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		} else {
			alert('An unexpected error occurred');
		}
	}
};

export const resetGame = async () => {
	try {
		const response = await fetch(`http://localhost:3210/reset`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		} else {
			alert('An unexpected error occurred');
		}
	}
};

type uQuestion = {
	id: number;
	category: string;
	difficulty: 'easy' | 'medium' | 'hard';
	question: string;
	options: string[];
	answer: string;
	favourited?: boolean;
	completed?: boolean;
	timestamp: string;
};

export const updateQuestion = async ({
	id,
	category,
	difficulty,
	question,
	options,
	answer,
	favourited,
	completed,
	timestamp,
}: uQuestion) => {
	try {
		const response = await fetch(`http://localhost:3210/questions/${id}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				id,
				category,
				difficulty,
				question,
				options,
				answer,
				favourited,
				completed,
				timestamp,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		} else {
			alert('An unexpected error occurred');
		}
	}
};

export const getAllQuestions = async () => {
	try {
		const response = await fetch(`http://localhost:3210/`);

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		} else {
			alert('An unexpected error occurred');
		}
	}
};

type qQueryFilter = {
	category: string;
	difficulty: 'easy' | 'medium' | 'hard';
	favourite: boolean;
	numberOfQuestions: number;
};

export const getFilterQuestions = async ({
	category,
	difficulty,
	favourite,
	numberOfQuestions,
}: qQueryFilter) => {
	try {
		const response = await fetch(`http://localhost:3210/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				category,
				difficulty,
				favourite,
				numberOfQuestions,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		} else {
			alert('An unexpected error occurred');
		}
	}
};

type cQuestion = {
	category: string;
	difficulty: 'easy' | 'medium' | 'hard';
	question: string;
	options: [string, string, string, string];
	answer: string;
	favourited?: boolean;
	completed?: boolean;
};

export const createQuestion = async ({
	category,
	difficulty,
	question,
	options,
	answer,
	favourited,
	completed,
}: cQuestion) => {
	try {
		const response = await fetch(`http://localhost:3210/`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				category,
				difficulty,
				question,
				options,
				answer,
				favourited,
				completed,
			}),
		});

		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		if (error instanceof Error) {
			alert(error.message);
		} else {
			alert('An unexpected error occurred');
		}
	}
};
