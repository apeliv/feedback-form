import { Button, StyleSheet, Text, View } from "react-native";
import DataInput from "./components/DataInput";
import EmojiSlider from "./components/EmojiSlider";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.textInputSection}>
        <DataInput label="Name" placeholder="Enter name" />
        <DataInput label="Number" placeholder="Enter number" />
        <DataInput label="Email" placeholder="Enter email" />
      </View>
      <View>
        <Text style={styles.text}>Share your experience in scaling</Text>
        <EmojiSlider />
      </View>
      <Button title="Submit" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    margin: "2%",
  },
  textInputSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },
  text: {
    marginLeft: 15,
    fontSize: 20,
    color: "#2071b2",
    fontWeight: "bold",
  },
});
