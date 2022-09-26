import { useState } from "react";
import {
  StyleSheet,
  TextInput,
  View,
  Button,
  Modal,
  Image,
} from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  function goalInputHandler(enteredText) {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    if (enteredGoal.length < 3) {
      setInvalidInput(true);
    } else {
      props.onAddGoal(enteredGoal);
      setEnteredGoal("");
    }
  };

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/goal.png")} />
        </View>
        <TextInput
          onChangeText={goalInputHandler}
          style={styles.textInput}
          placeholder="Enter your goal...."
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonItem}>
            <Button onPress={addGoalHandler} color="#5e0acc" title="Add goal" />
          </View>
          <View style={styles.buttonItem}>
            <Button title="Cancel" color="#dc2044" onPress={props.onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 16,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
    backgroundColor: "#b1d0b1",
  },
  textInput: {
    backgroundColor: "#fff",
    width: "100%",
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 16,
  },
  buttonItem: {
    width: "30%",
    marginRight: 8,
  },

  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
