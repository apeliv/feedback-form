import { View, Text, TextInput, StyleSheet } from "react-native";
const DataInput = ({ label, placeholder }) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.text}>{label}</Text>
      <TextInput style={styles.textInput} placeholder={placeholder} />
    </View>
  );
};

export default DataInput;

const styles = StyleSheet.create({
  textInputContainer: {
    width: "40%",
    margin: 10,
  },
  textInput: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 10,
    fontSize: 18,
  },
  text: {
    margin: 2,
    fontSize: 20,
    color: "#2071b2",
    fontWeight: "bold",
  },
});
