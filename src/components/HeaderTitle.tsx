import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackNavigatorParams} from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';

interface IProps {
  title: string;
  hideIcon?: boolean;
}

const HeaderTitle = ({title, hideIcon = false}: IProps) => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackNavigatorParams>>();

  return (
    <View style={styles.header}>
      {!hideIcon && (
        <Pressable
          style={styles.pressable}
          onPress={() => navigation.navigate('HomeScreen')}>
          <Icon name="arrow-back-outline" size={26} color="#252525" />
        </Pressable>
      )}
      <Text style={styles.headerTitle}>{title}</Text>
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
    color: '#252525',
  },
});

export default HeaderTitle;
