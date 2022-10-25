import React from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";

const Welcome2 = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Welcome-2</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  heading: {
    fontSize: 20
  }
});

export default Welcome2;
