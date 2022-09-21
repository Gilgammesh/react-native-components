import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import FadeInImage from '../components/FadeInImage';
import HeaderTitle from '../components/HeaderTitle';

const InfiniteScrollScreen = () => {
  const [veces, setVeces] = useState<number>(1);
  const [numbers, setNumbers] = useState<number[]>([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    console.log(`cargando: ${veces}`);
    const inc = 6;
    const newNumbers = numbers.slice(-inc).map(ele => ele + inc);
    setNumbers([...numbers, ...newNumbers]);
    setVeces(prev => prev + 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <HeaderTitle title="Scroll Infinito" />}
        data={numbers}
        keyExtractor={item => `${item}`}
        renderItem={({item}) => (
          <View style={styles.item}>
            <FadeInImage
              uri={`https://picsum.photos/id/${item}/200/300`}
              style={styles.img}
            />
          </View>
        )}
        onEndReached={() => loadMore()}
        // onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View style={styles.activity}>
            <ActivityIndicator size={25} color="red" />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    marginVertical: 6,
  },
  activity: {
    padding: 20,
  },
  img: {
    width: '100%',
    height: 200,
  },
});

export default InfiniteScrollScreen;
