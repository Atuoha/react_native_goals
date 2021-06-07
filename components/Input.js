import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const Input = props => {
  const [inputGoal, setInputGoal] = useState("");

  const addGoalHandler = () => {
    props.action(inputGoal);
    setInputGoal("");
  };

  return (
    <Modal visible={props.mode} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={inputGoal}
          onChangeText={(e) => setInputGoal(e)}
          placeholder="Course Goal"
          style={styles.inputBox}
        />
        <View style={styles.btnView}>
          <View style={styles.btnStyles}>
            <Button onPress={props.onCancel} title="Cancel" color="red" />
          </View>

          <View style={styles.btnStyles}>
            <Button onPress={addGoalHandler} title="Submit New Goal" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  inputBox: {
    width: "80%",
    // border: "black",
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },

  btnView: {
    flexDirection: "row",
    // justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
  },

  btnStyles: {
    width: "40%",
  },
});

export default Input;
