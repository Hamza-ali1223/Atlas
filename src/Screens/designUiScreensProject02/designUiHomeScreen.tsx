import { FlatList, SafeAreaView, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';
import { s, vs } from 'react-native-size-matters';
import TopTabs from '../../components/TopTabs';
import MeditationCard from '../../components/MeditationCard';
import { dummyData } from '../../data/dummyData';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

const designUiHomeScreen = () => {
  const TAB_ARRAY = ['Live', 'Recorded'];

  const [activeTab, setactiveTab] = useState<string>('Live');

  const changebadgeLabel = (activeTabvalue: string) => {
    setactiveTab(activeTabvalue);
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.titleText}>Meditations</Text>
      <Text
        style={{
          marginTop: vs(6),
          fontSize: 14,
          color: '#2C2016',
          marginBottom: vs(14),
        }}
      >
        {' '}
        Welcome to Mind Chambers
      </Text>
      <TopTabs changebadgeLabel={changebadgeLabel} tab_array={TAB_ARRAY} />
      <FlatList
        data={dummyData}
        keyExtractor={item => item.id}
        renderItem={item => (
          <MeditationCard
            badgeText={activeTab}
            uriData={item.item.image}
            date={item.item.date}
            title={item.item.title}
          />
        )}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          marginBottom: vs(16),
          justifyContent: 'space-between',
        }}
        contentContainerStyle={{ paddingTop: vs(12) }}
      />
    </SafeAreaView>
  );
};

export default designUiHomeScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: s(17),
  },
  titleText: {
    marginTop: vs(24),
    fontSize: 20,
    fontWeight: 'semibold',
    color: '#1D150F',
  },
});
