import React from 'react';
import {SomePureComponentProps, SomePureComponentState} from './interface';

export class SomePureComponent extends React.PureComponent<
	SomePureComponentProps,
	SomePureComponentState
> {
	componentDidMount() {
		this.setState({name: 'Andrew', info: {alias: 'The coder'}});
	}

	//* On Pure components, react does a shallow comparison to decide if it needs to call render() again
	// In this case, the name "Andrew Cardoso" gets rendered only once
	// But for nested properties like "The Programmer", even if it is the same value, render() is always called
	handleSetState(state: Partial<SomePureComponentState>) {
		this.setState({...(state as SomePureComponentState)});
	}

	render(): React.ReactNode {
		const name = 'Andrew Cardoso';
		const alias = 'The Programmer';
    console.log('Pure component render() called');
		return (
			<>
				<h1>Pure Component</h1>
				<h3>Dragon Names Generator</h3>
				<p>
					<strong>Name:</strong> {this.state?.name}
				</p>
				<p>
					<strong>Alias:</strong> {this.state?.info?.alias}
				</p>
				<button onClick={() => this.handleSetState({name})}>Generate new name</button>
				<br />
        <br />
				<button onClick={() => this.handleSetState({info: {alias}})}>
					Generate new alias
				</button>
			</>
		);
	}
}
