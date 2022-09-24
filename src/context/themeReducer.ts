import themes, {EThemes} from '../styles/themes';

export enum EActionType {
  SETDARKTHEME = 'setDarkTheme',
  SETLIGHTTHEME = 'setLightTheme',
}
interface IAction {
  type: EActionType.SETDARKTHEME | EActionType.SETLIGHTTHEME;
}

export interface IThemeReducer {
  current: EThemes.LIGHT | EThemes.DARK;
  dark: boolean;
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
    switch: string;
    divider: string;
    danger: string;
    success: string;
    warning: string;
  };
}
export const themeInitialState: IThemeReducer = {
  current: EThemes.LIGHT,
  dark: false,
  ...themes[EThemes.LIGHT],
};

const themeReducer = (state = themeInitialState, {type}: IAction) => {
  switch (type) {
    case EActionType.SETDARKTHEME:
      return {
        ...state,
        current: EThemes.DARK,
        dark: true,
        ...themes[EThemes.DARK],
      };
    case EActionType.SETLIGHTTHEME:
      return {
        ...state,
        current: EThemes.LIGHT,
        dark: false,
        ...themes[EThemes.LIGHT],
      };
    default:
      return state;
  }
};

export default themeReducer;
