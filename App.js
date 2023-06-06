import { Button, StyleSheet, Text, View } from "react-native";
import DataInput from "./components/DataInput";

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
      </View>
      <Button title="Send" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
  },
  textInputSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    backgroundColor: "#fff",
  },
  text: {
    margin: 2,
    fontSize: 20,
    color: "#3944bc",
    fontWeight: "bold",
  },
});
