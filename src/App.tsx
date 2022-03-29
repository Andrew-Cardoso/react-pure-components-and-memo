import {useState} from 'react';
import './App.css';
import {SomeMemoComponent} from './components/SomeMemoComponent';
import {SomeMemoComponentState} from './components/SomeMemoComponent/interface';
import {SomePureComponent} from './components/SomePureComponent';

function App() {
	const [state, setState] = useState<SomeMemoComponentState>({
		name: 'Andrew',
		info: {alias: 'The coder'},
	});

	const handleNextState = (nextState: Partial<SomeMemoComponentState>) => {
		setState({...state, ...nextState});
	};

	return (
		<div className='App'>
			<SomePureComponent />
			<hr />
			<SomeMemoComponent name={state.name} info={state.info} />
			<button onClick={() => handleNextState({name: 'Andrew Cardoso'})}>
				Generate new name
			</button>
			<br />
			<br />
			<button onClick={() => handleNextState({info: {alias: 'The Programmer'}})}>
				Generate new alias
			</button>
		</div>
	);
}

export default App;
