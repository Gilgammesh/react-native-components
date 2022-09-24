export enum EThemes {
  DARK = 'dark',
  LIGHT = 'light',
}

const themes = {
  light: {
    colors: {
      primary: '#084f6a',
      background: '#fff',
      card: '#fff',
      text: '#000',
      border: '#000',
      notification: '#fff',
      switch: '#000',
      divider: '#ccc',
      danger: 'red',
      success: 'green',
      warning: 'orange',
    },
  },
  dark: {
    colors: {
      primary: '#75cedb',
      background: '#000',
      card: '#000',
      text: '#fff',
      border: '#fff',
      notification: '#000',
      switch: 'orange',
      divider: '#bbb',
      danger: 'red',
      success: 'green',
      warning: 'orange',
    },
  },
};

export default themes;
