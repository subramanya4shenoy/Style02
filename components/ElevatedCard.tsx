import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElevatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
      <ScrollView horizontal style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.card2]}>
          <Text>tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.card2]}>
          <Text>to</Text>
        </View>
        <View style={[styles.card, styles.cardElevated, styles.card1]}>
          <Text>more </Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text>tap</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 12,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  card: {
    flex: 1,
    alignItems: 'center',
    width: 100,
    height: 100,
    justifyContent: 'center',
    margin: 8,
    borderRadius: 4,
  },
  cardElevated: {
    backgroundColor: '#CAD5e2',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#ffff00',
  },
  card1: {
    backgroundColor: '#ef5356',
  },
  card2: {
    backgroundColor: '#e12356',
  },
  card3: {
    backgroundColor: '#235241',
  },
});
