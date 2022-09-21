import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

type Props = {
  title: string;
};

const HeaderTitle = ({title}: Props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 10,
  },
  headerTitle: {
    fontWeight: '600',
    fontSize: 24,
    color: '#000',
  },
});

export default HeaderTitle;
