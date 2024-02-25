import {
  StyleSheet,
  Text,
  View,
  Linking,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const ActionCard = () => {
  function openWebsite(websiteLink: string) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog card</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.headerText}>Whats new ?</Text>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://img.freepik.com/premium-photo/4k-beautiful-nature-abstract-background_939808-11390.jpg',
          }}
        />
      </View>
      <View style={styles.bodyContainer}>
        <Text numberOfLines={20}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim harum
          dolore autem ut itaque atque natus qui, esse vitae minima asperiores
          amet nihil ipsam aliquid error tempore ea officia fugit!
        </Text>
        <View style={styles.bodyFooter}>
          <TouchableOpacity onPress={() => openWebsite('https://google.com')}>
            <Text> Read more </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openWebsite('https://youtube.com')}>
            <Text> follow me </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ActionCard;

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 12,
  },
  headerText: {
    fontSize: 12,
    fontWeight: '900',
  },
  cardImage: {
    height: 100,
  },
  card: {
    margin: 8,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  cardElevated: {
    elevation: 4,
    marginBottom: 8,
  },
  bodyContainer: {},
  bodyFooter: {},
});
