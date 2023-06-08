import { useEffect, useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
const DataInput = ({ label, placeholder, dataState, setDataState, regEx }) => {
  const [errorWarning, setErrorWarning] = useState("");
  const [isDisplayInputBorderRed, setIsDisplayInputBorderRed] = useState(false);

  const validateData = () => {
    if (!regEx.test(dataState)) {
      setErrorWarning(`Enter a valid ${label.toLowerCase()}`);
      setIsDisplayInputBorderRed(true);
    } else {
      setErrorWarning("");
      setIsDisplayInputBorderRed(false);
    }
  };

  useEffect(() => {
    validateData();
  }, [dataState]);

  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={
          isDisplayInputBorderRed ? styles.warningInputBox : styles.textInput
        }
        placeholder={placeholder}
        defaultValue={dataState}
        onChangeText={(text) => setDataState(text)}
      />
      <Text style={styles.warning}>{errorWarning}</Text>
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
  warning: {
    color: "tomato",
    fontSize: 12,
    textAlign: "center",
  },
  warningInputBox: {
    borderWidth: 2,
    borderColor: "tomato",
    padding: 16,
    borderRadius: 10,
    fontSize: 18,
  },
});
