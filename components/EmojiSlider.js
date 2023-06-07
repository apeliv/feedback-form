import { View, Text, StyleSheet, Dimensions } from "react-native";
import Slider from "@react-native-community/slider";
import { useState } from "react";

const EmojiSlider = () => {
  const [rating, setRating] = useState(1);
  const emojis = [
    { id: 1, emoji: "😖", description: "Worst" },
    { id: 2, emoji: "😟", description: "Not good" },
    { id: 3, emoji: "😐", description: "Fine" },
    { id: 4, emoji: "😃", description: "Look good" },
    { id: 5, emoji: "😍", description: "Very good" },
  ];
  return (
    <View>
      <View style={styles.emojisContainer}>
        {emojis.map((emoji) => (
          <View key={emoji.id}>
            <Text
              style={emoji.id === rating ? styles.activeEmoji : styles.emoji}
            >
              {emoji.emoji}
            </Text>
            <Text
              style={
                emoji.id === rating
                  ? styles.activeDescription
                  : styles.description
              }
            >
              {emoji.description}
            </Text>
          </View>
        ))}
      </View>
      <Slider
        style={styles.slider}
        thumbStyle={{ width: "100%", height: 15 }}
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={rating}
        onValueChange={(rating) => setRating(rating)}
        minimumTrackTintColor="#105955"
        maximumTrackTintColor="#a5e0dd"
        thumbTintColor="#a5e0dd"
       />
    </View>
  );
};

export default EmojiSlider;

const styles = StyleSheet.create({
  emojisContainer: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    fontSize: 20,
    marginTop: "5%",
    marginLeft: 15,
  },
  emoji: {
    fontSize: 25,
    textAlign: "center",
    color: "transparent",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 5,
    textShadowColor: "#dddddd",
  },
  activeEmoji: {
    fontSize: 25,
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    fontSize: 17,
    color: "#a5e0dd",
  },
  activeDescription: {
    textAlign: "center",
    fontSize: 17,
    color: "#105955",
    fontWeight: "bold",
  },
  text: {
    marginLeft: 15,
    fontSize: 20,
    color: "#3944bc",
    fontWeight: "bold",
  },
  slider: {
    transform: [{ scaleX: 2 }, { scaleY: 2 }],
    width: Dimensions.get("window").width / 2,
    alignSelf: "center",
    marginTop: "7.5%",
  },
});
