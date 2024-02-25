import React from 'react';
import {SafeAreaView, View, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
          <ActionCard />
          <ElevatedCard />
          <FancyCard />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
