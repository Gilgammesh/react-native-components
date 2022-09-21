import React from 'react';
import {SafeAreaView, StyleSheet, View, FlatList} from 'react-native';
import FlatListMenuItem from '../components/FlatListMenuItem';
import HeaderTitle from '../components/HeaderTitle';
import {menuItems} from '../data/menuItems';
import {IMenuItem} from '../interfaces/appInterfaces';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={menuItems}
        renderItem={({item}: {item: IMenuItem}) => (
          <FlatListMenuItem item={item} />
        )}
        keyExtractor={(item: IMenuItem) => `${item.id}`}
        ListHeaderComponent={() => (
          <HeaderTitle title="Opciones de Menú" hideIcon />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#ddd',
    height: 2,
  },
});

export default HomeScreen;
