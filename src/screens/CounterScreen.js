import React, { useReducer } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, counter: ++state.counter };
    case "decrement":
      return { ...state, counter: --state.counter };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });

  return (
    <View>
      <Button
        title="Increment"
        onPress={() => dispatch({ type: "increment" })}
      />
      <Button
        title="Decrement"
        onPress={() => dispatch({ type: "decrement" })}
      />

      <Text style={styles.subheaderText}>Counter: {state.counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  subheaderText: {
    fontSize: 20,
  },
});

export default CounterScreen;
