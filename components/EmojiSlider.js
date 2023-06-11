import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";

const EmojiSlider = ({ rating, setRating }) => {
  const emojis = [
    { emoji: "😖", description: "Worst" },
    { emoji: "😟", description: "Not good" },
    { emoji: "😐", description: "Fine" },
    { emoji: "😃", description: "Look good" },
    { emoji: "😍", description: "Very good" },
  ];
  return (
    <View>
      <View style={styles.emojisContainer}>
        {emojis.map((emoji, index) => (
          <View key={index}>
            <Text
              style={index + 1 === rating ? styles.activeEmoji : styles.emoji}
            >
              {emoji.emoji}
            </Text>
            <Text
              style={
                index + 1 === rating
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
    flexWrap: "wrap",
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
    width: "100%",
    alignSelf: "center",
    marginTop: 5,
    marginBottom: "3%",
  },
});
