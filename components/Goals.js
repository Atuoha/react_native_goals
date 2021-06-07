import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Goals = props =>{
    return (
      <TouchableOpacity onPress={() => props.deleteItem(props.id)}>
        <View style={styles.listItem}>
          <Text>{props.value}</Text>
        </View>
      </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    borderWidth: 1,
    borderColor: "black",
    marginVertical: 10,
  },
});

export default Goals;
