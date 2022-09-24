import React, {useState, Dispatch, SetStateAction, useContext} from 'react';
import {Switch} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  enabled: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

const CustomSwitch = ({enabled, onChange}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const [isEnabled, setIsEnabled] = useState(enabled);
  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
    onChange(prev => !prev);
  };

  return (
    <Switch
      trackColor={{false: colors.danger, true: colors.success}}
      thumbColor={isEnabled ? '#fff' : '#fff'}
      ios_backgroundColor="red"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
