import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import DataInput from "./components/DataInput";
import EmojiSlider from "./components/EmojiSlider";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [comment, setComment] = useState("");
  const nameRegEx = /^[a-zA-Z ]{2,15}\s+[A-Z]+[a-zA-Z ]{1,15}$/;
  const mailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return (
    <View style={styles.container}>
      <View style={styles.textInputSection}>
        <DataInput
          label="Name"
          placeholder="Enter name"
          dataState={name}
          setDataState={setName}
          regEx={nameRegEx}
        />
        <DataInput
          label="Number"
          placeholder="Enter number"
          dataState={phoneNumber}
          setDataState={setPhoneNumber}
          regEx={phoneNumberRegEx}
        />
        <DataInput
          label="Email"
          placeholder="Enter email"
          dataState={mailAddress}
          setDataState={setMailAddress}
          regEx={mailRegEx}
        />
      </View>

      <View>
        <Text style={styles.text}>Share your experience in scaling</Text>
        <EmojiSlider />
      </View>

      <TextInput
        style={styles.comment}
        placeholder="Add your comments..."
        multiline={true}
        numberOfLines={4}
        defaultValue={comment}
        onChangeText={(text) => setComment(text)}
      />

      <Pressable style={styles.button}>
        <Text style={styles.btnText}>SUBMIT</Text>
      </Pressable>
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
  comment: {
    borderWidth: 1,
    borderColor: "#aaaaaa",
    borderRadius: 15,
    padding: 16,
    fontSize: 18,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#20b2aa",
    padding: 10,
    borderWidth: 1,
    borderColor: "#20b2aa",
    borderRadius: 10,
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
