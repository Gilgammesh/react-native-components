import React, {useContext} from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';
import {menuItems} from '../data/menuItems';
import {IMenuItem} from '../interfaces/appInterfaces';

const HomeScreen = () => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}: {item: IMenuItem}) => <FlatListMenuItem item={item} />}
        keyExtractor={(item: IMenuItem) => `${item.id}`}
        ListHeaderComponent={() => <HeaderTitle title="Opciones de Menú" hideIcon />}
        ItemSeparatorComponent={() => (
          <View style={[styles.separator, {backgroundColor: colors.divider}]} />
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 2,
  },
});

export default HomeScreen;
