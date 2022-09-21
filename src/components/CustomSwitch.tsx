import React, {useState, Dispatch, SetStateAction} from 'react';
import {Switch} from 'react-native';

interface Props {
  enabled: boolean;
  onChange: Dispatch<SetStateAction<boolean>>;
}

const CustomSwitch = ({enabled, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(enabled);
  const toggleSwitch = () => {
    setIsEnabled(prev => !prev);
    onChange(prev => !prev);
  };

  return (
    <Switch
      trackColor={{false: 'red', true: 'green'}}
      thumbColor={isEnabled ? '#fff' : '#fff'}
      ios_backgroundColor="red"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
