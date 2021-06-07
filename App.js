import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import Input from "./components/Input";
import Goals from "./components/Goals";

export default function App() {
  const [storedGoals, setGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoal = (input) => {
    // setGoals.push(inputGoal);
    setGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random.toString(), value: input },
    ]);
    setIsAddMode(false);
    // setInputGoal("");
  };

  const deleteGoal = (id) => {
    console.log(id);
    SetGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== id);
    });
  };

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <Input action={addGoal} mode={isAddMode} onCancel={cancelGoalHandler} />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={storedGoals}
        renderItem={(itemData) => (
          <Goals
            deleteItem={deleteGoal}
            id={itemData.item.id}
            value={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
