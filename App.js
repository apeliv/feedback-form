import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import DataInput from "./components/DataInput";
import EmojiSlider from "./components/EmojiSlider";
import Loading from "./components/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [mailAddress, setMailAddress] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const nameRegEx = /^[A-Z]+[a-zA-Z ]{1,15}\s+[A-Z]+[a-zA-Z ]{1,15}$/;
  const mailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneNumberRegEx =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const [disableButtonForWrongName, setDisableButtonForWrongName] =
    useState(true);
  const [
    disableButtonForWrongPhoneNumber,
    setDisableButtonForWrongPhoneNumber,
  ] = useState(true);
  const [disableButtonForWrongMail, setDisableButtonForWrongMail] =
    useState(true);

  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const isButtonDisabled =
    disableButtonForWrongName ||
    disableButtonForWrongPhoneNumber ||
    disableButtonForWrongMail;

  const processRatingToDescription = (rating) => {
    if (rating === 1) {
      return "Worst";
    } else if (rating === 2) {
      return "Not good";
    } else if (rating === 3) {
      return "Fine";
    } else if (rating === 4) {
      return "Look Good";
    } else if (rating === 5) {
      return "Very Good";
    } else {
      return "";
    }
  };

  const bodyRequest = {
    name: name,
    phoneNumber: phoneNumber,
    email: mailAddress,
    experience: processRatingToDescription(rating),
    comment: comment,
  };

  const handlePress = () => {
    axios
      .post("http://10.0.2.2:3000/people", bodyRequest) //localhost for android emulator
      // .post("http://192.168.247.232:3000/people", bodyRequest) //localhost for ios physical device
      .then(() => {
        setName("");
        setPhoneNumber("");
        setMailAddress("");
        setRating(1);
        setComment("");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      handlePress();
      setIsLoading(false);
    }, 2000);
  }, [isButtonClicked]);
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <Loading />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.textInputSection}>
            <DataInput
              label="Name"
              placeholder="Enter name"
              dataState={name}
              setDataState={setName}
              regEx={nameRegEx}
              setDisableButton={(x) => setDisableButtonForWrongName(x)}
            />
            <DataInput
              label="Number"
              placeholder="Enter number"
              dataState={phoneNumber}
              setDataState={setPhoneNumber}
              regEx={phoneNumberRegEx}
              setDisableButton={(x) => setDisableButtonForWrongPhoneNumber(x)}
            />
            <DataInput
              label="Email"
              placeholder="Enter email"
              dataState={mailAddress}
              setDataState={setMailAddress}
              regEx={mailRegEx}
              setDisableButton={(x) => setDisableButtonForWrongMail(x)}
            />
          </View>

          <View>
            <Text style={styles.text}>Share your experience in scaling</Text>
            <EmojiSlider rating={rating} setRating={setRating} />
          </View>

          <TextInput
            style={styles.comment}
            placeholder="Add your comments..."
            multiline={true}
            numberOfLines={4}
            defaultValue={comment}
            onChangeText={(text) => setComment(text)}
          />

          <Pressable
            style={isButtonDisabled ? styles.disabledButton : styles.button}
            disabled={isButtonDisabled}
            onPress={() => setIsButtonClicked(!isButtonClicked)}
          >
            <Text style={styles.btnText}>SUBMIT</Text>
          </Pressable>
        </View>
      )}
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
  loadingContainer: {
    backgroundColor: "#fff",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
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
    marginBottom: 5,
  },
  button: {
    backgroundColor: "#105955",
    padding: 10,
    borderWidth: 1,
    borderColor: "#105955",
    borderRadius: 10,
    marginTop: 5,
  },
  disabledButton: {
    backgroundColor: "#20b2aa",
    padding: 10,
    borderWidth: 1,
    borderColor: "#20b2aa",
    borderRadius: 15,
  },
  btnText: {
    textAlign: "center",
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
  },
});
