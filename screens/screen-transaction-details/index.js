import React from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";

const TransactionDetails = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Transaction Details</Text>
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

export default TransactionDetails;
