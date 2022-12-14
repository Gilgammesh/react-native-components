import React, {useContext, useState} from 'react';
import {StyleSheet, SafeAreaView, View, SectionList, RefreshControl, Text} from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import {ThemeContext} from '../context/ThemeContext';

interface Data {
  casa: string;
  data: string[];
}

const data: Data[] = [
  {
    casa: 'DC Comics',
    data: ['Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin', 'Batman', 'Superman', 'Robin'],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
      'Antman',
      'Thor',
      'Spiderman',
      'Antman',
    ],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama', 'Kenshin', 'Goku', 'Saitama'],
  },
];

const SectionListScreen = () => {
  const {theme} = useContext(ThemeContext);
  const {colors} = theme;

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SectionList
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} title="Refrescando" />}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => <HeaderTitle title={`Registros: ${data.length}`} hideIcon />}
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({item}) => (
          <View style={styles.item}>
            <Text style={[styles.title, {color: colors.text}]}>{item}</Text>
          </View>
        )}
        renderSectionHeader={({section}) => <Text style={styles.header}>{section.casa}</Text>}
        renderSectionFooter={({section}) => (
          <Text style={[styles.footer, {color: colors.text}]}>Registros: {section.data.length}</Text>
        )}
        stickySectionHeadersEnabled
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    paddingHorizontal: 10,
    marginVertical: 4,
  },
  header: {
    fontSize: 24,
    backgroundColor: '#ddd',
    marginVertical: 8,
    paddingVertical: 2,
    paddingHorizontal: 4,
  },
  title: {
    fontSize: 16,
  },
  footer: {
    fontSize: 17,
    fontWeight: '600',
    marginVertical: 8,
  },
});

export default SectionListScreen;
