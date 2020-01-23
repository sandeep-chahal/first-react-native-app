import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  FlatList
} from "react-native";

export default function App() {
  const [goal, setGoal] = useState("");
  const [goals, setGoals] = useState([]);

  const handleInputChange = text => {
    setGoal(text);
  };

  const handleClick = () => {
    if (goal === "") return;
    setGoals(goals => [goal, ...goals]);
    setGoal("");
  };

  const removeGoal = i => {
    const _goals = [...goals];
    _goals.splice(i, 1);
    setGoals(_goals);
  };

  return (
    <View style={{ padding: 50 }}>
      <Text style={{ marginBottom: 10, textAlign: "center", fontSize: 20 }}>
        Welcome Aboard!
      </Text>

      {/* ----------------------- */}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between"
        }}
      >
        <TextInput
          style={styles.input}
          placeholder="enter you goal"
          value={goal}
          onChangeText={handleInputChange}
        />
        <Button style={styles.btn} title="add" onPress={handleClick} />
      </View>

      {/* ----------------------- */}

      <View style={{ marginTop: 30 }}>
        <View style={styles.header}>
          <Text style={{ textAlign: "center", marginBottom: 20 }}>Goals</Text>
        </View>
        <FlatList
          keyExtractor={(item, i) => item + i}
          data={goals}
          renderItem={dataItem => (
            <View
              style={styles.item}
              onTouchStart={() => removeGoal(dataItem.index)}
            >
              <Text>{dataItem.item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f0f696",
    padding: 10,
    marginBottom: 15
  },
  header: {
    fontSize: 20,
    justifyContent: "center"
  },
  input: {
    padding: 5,
    borderWidth: 1,
    width: "70%",
    marginRight: 10
  },
  btn: {}
});
