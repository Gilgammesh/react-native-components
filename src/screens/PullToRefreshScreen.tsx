import React, {useState} from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  RefreshControl,
  Text,
} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';

interface Data {
  id: number;
  nombres: string;
  correo: string;
}

const data: Data[] = [
  {
    id: 1,
    nombres: 'Carlos Santander',
    correo: 'carlos.santander@gmail.com',
  },
  {
    id: 2,
    nombres: 'Marianella Yalta',
    correo: 'marianella.yalta@gmail.com',
  },
  {
    id: 3,
    nombres: 'Joaquin del Valle',
    correo: 'joaquin.valle@gmail.com',
  },
];

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            progressBackgroundColor="#5856d6"
            colors={['#fff']}
            style={refreshing && styles.refreshControl}
            tintColor="#fff"
          />
        }>
        <HeaderTitle title="Pull to Refresh" />
        {refreshing ? (
          <View style={styles.refresh}>
            <Text>Refrescando los datos</Text>
          </View>
        ) : (
          <View style={styles.content}>
            {data.map(row => (
              <Text key={row.id}>{JSON.stringify(row, null, 2)}</Text>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  refreshControl: {
    backgroundColor: '#5856d6',
  },
  content: {
    paddingVertical: 20,
  },
  refresh: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PullToRefreshScreen;
