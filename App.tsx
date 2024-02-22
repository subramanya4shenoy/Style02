import React from 'react';
import {SafeAreaView, View, Text, ScrollView} from 'react-native';
import FlatCards from './components/FlatCards';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <FlatCards />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
