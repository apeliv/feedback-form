import { Image } from "react-native";
import { StyleSheet } from "react-native";
const Loading = () => {
  return (
    <Image
      style={styles.loadingGif}
      source={require("../assets/loading.gif")}
    />
  );
};

export default Loading;

const styles = StyleSheet.create({
  loadingGif: {
    width: 50,
    height: 50,
  },
});
