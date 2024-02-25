import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: 'https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.1412446893.1708646400&semt=sph',
          }}
          style={styles.cardImage}
        />
      </View>
      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.cardTitle}>Nature</Text>
        <Text style={styles.cardLabel}>lakes</Text>
        <Text style={styles.cardDescription}>get lost in the wild</Text>
        <Text style={styles.cardFooter}>Book</Text>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
  },
  card: {
    margin: 8,
    backgroundColor: '#3c3c3c',
    borderRadius: 4,
  },
  cardElevated: {
    elevation: 4,
    marginBottom: 8,
  },
  cardImage: {
    height: 250,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardLabel: {},
  cardDescription: {},
  cardFooter: {},
});
