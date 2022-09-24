import React, {useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {IMenuItem} from '../interfaces/appInterfaces';
import {RootStackNavigatorParams} from '../navigation/Navigation';
import {StackNavigationProp} from '@react-navigation/stack';
import {ThemeContext} from '../context/ThemeContext';

interface IProps {
  item: IMenuItem;
}

const FlatListMenuItem = ({item: {icon, name, component}}: IProps) => {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigatorParams>>();

  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate(component)}>
      <View style={styles.container}>
        <View style={styles.item}>
          <Icon name={icon} size={20} color={colors.primary} style={styles.itemIcon} />
          <Text style={[styles.itemText, {color: colors.text}]}>{name}</Text>
        </View>
        <Icon name="chevron-forward-outline" size={20} color={colors.text} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  itemIcon: {
    marginRight: 5,
  },
  itemText: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default FlatListMenuItem;
