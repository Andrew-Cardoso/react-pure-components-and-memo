import {Info} from '../SomePureComponent/interface';

export interface SomeMemoComponentState {
	name: string;
	info: Info;
}

export interface SomeMemoComponentProps extends SomeMemoComponentState {}
