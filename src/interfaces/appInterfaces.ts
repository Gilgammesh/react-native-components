import {RootStackNavigatorParams} from '../navigation/Navigation';

export interface IMenuItem {
  id: number;
  name: string;
  icon: string;
  component: keyof RootStackNavigatorParams;
}
