import React from 'react';
import '../src/index.css';
import Button from './components/Button/Button';

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
			</div>
		</React.Fragment>
	);
}

export default App;
