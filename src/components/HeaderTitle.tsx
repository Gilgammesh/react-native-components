import React, {useContext} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigatorParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/ThemeContext';

interface IProps {
  title: string;
  hideIcon?: boolean;
}

const HeaderTitle = ({title, hideIcon = false}: IProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigatorParams>>();

  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  return (
    <View style={styles.header}>
      {!hideIcon && (
        <Pressable style={styles.pressable} onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="arrow-back-outline" size={26} color={colors.text} />
        </Pressable>
      )}
      <Text style={[styles.headerTitle, {color: colors.text}]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  pressable: {
    marginRight: 8,
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 24,
  },
});

export default HeaderTitle;
