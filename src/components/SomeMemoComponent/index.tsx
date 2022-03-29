import React from 'react';
import {SomeMemoComponentProps} from './interface';

//* The React.memo does a shallow comparison in the component props
//* If the values doesnt change, the component is not rendered again
export const SomeMemoComponent: React.FC<SomeMemoComponentProps> = React.memo(({name, info}) => {
	console.log('memo render() called');
	return (
		<>
			<h1>Memo Component</h1>
			<h3>Dragon Names Generator</h3>
			<p>
				<strong>Name:</strong> {name}
			</p>
			<p>
				<strong>Alias:</strong> {info?.alias}
			</p>
		</>
	);
},
//* The second arg of React.memo is a comparison function to override the default one
// Returns false if you want to render again, and true if you dont
(prevProps, nextProps) => {
  const nameChanged = prevProps.name !== nextProps.name;
  const aliasChanged = prevProps.info?.alias !== nextProps.info?.alias;
  const result = !nameChanged && !aliasChanged;
  return result;
});
