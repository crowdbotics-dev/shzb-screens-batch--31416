const Radio = props => {
  return (
    <Pressable
      style={[radioStyles.container, props.style]}
      onPress={props.onPress}>
      {props.selected && <View style={radioStyles.radio} />}
    </Pressable>
  );
};

const radioStyles = StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  radio: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#000"
  }
});
