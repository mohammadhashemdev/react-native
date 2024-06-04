import React from "react";
import { Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend1", age: 20 },
    { name: "Friend2", age: 19 },
    { name: "Friend3", age: 22 },
    { name: "Friend4", age: 23 },
    { name: "Friend5", age: 26 },
    { name: "Friend6", age: 28 },
    { name: "Friend7", age: 23 },
    { name: "Friend8", age: 22 },
    { name: "Friend9", age: 25 },
    { name: "Friend10", age: 20 },
    { name: "Friend11", age: 17 },
  ];
  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={(el) => (
        <Text style={styles.textStyle}>
          {el.item.name} - Age: {el.item.age}
        </Text>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    marginVertical: 50,
  },
});

export default ListScreen;
