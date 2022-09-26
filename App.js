import { useState } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [goalsList, setGoalsList] = useState([]);

  function startAddGoalHandle() {
    setModalVisible(true);
  }

  function endAddGoalHandle() {
    setModalVisible(false);
  }

  function addGoalHandler(enteredGoal) {
    setGoalsList((currentGoalList) => [
      ...currentGoalList,
      { text: enteredGoal, id: Math.random().toString() },
    ]);
    setModalVisible(false);
  }

  function deleteGoalHandler(id) {
    setGoalsList((currentGoalList) => {
      return currentGoalList.filter((currentGoal) => currentGoal.id !== id);
    });
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add new goal"
        color={"#5e0acc"}
        onPress={startAddGoalHandle}
      />
      <GoalInput
        onCancel={endAddGoalHandle}
        visible={modalVisible}
        onAddGoal={addGoalHandler}
      />
      <View style={styles.goalsCotainer}>
        <Text>Goals to achieve...</Text>

        <FlatList
          data={goalsList}
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={deleteGoalHandler}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#b1d0b1",
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 24,
    borderBottomWidth: 1,
    borderColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  goalsCotainer: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    flex: 5,
  },

});
