import React from "react";
import { Button, Pressable, StyleSheet, Text, View } from "react-native";

const GoalItem = (props) => {

  return (
    <Pressable android_ripple={{color:"#210644"}} style={styles.goalsTextContainer}>
      <Text style={styles.goalsText}>{props.text}</Text>
      <Button onPress={props.onDeleteGoal.bind(this,props.id)} color="#dc2044" title="Delete"/>
    </Pressable>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalsTextContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalsText: {
    color: "white",
  },
});
