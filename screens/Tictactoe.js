import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Alert } from "react-native";
import colors from "../variables/Colors";

const Grid = () => {
  // Initialize a 3x3 grid with empty strings
  const [grid, setGrid] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]);
  const [userChoice, setUserChoice] = useState("");
  const inputHandler = (row, col) => {
    setGrid((prevGrid) => {
      // Create a copy of the grid to avoid mutating state directly
      const newGrid = prevGrid.map((rowArr) => [...rowArr]);
      if (newGrid[row][col] === "") {
        if (userChoice === "x") {
          newGrid[row][col] = "✖️";
          setUserChoice("o");
        }

        if (userChoice === "o") {
          newGrid[row][col] = "⭕";
          setUserChoice("x");
        }
      }
      if (userChoice === "") {
        Alert.alert("Info", "please choose X or O", [], { cancelable: true });
      }
      return newGrid; // Update the state
    });
  };

  const renderGridItem = (row, col) => (
    <View key={`${row}-${col}`} style={[styles.cell, styles.center]}>
      <Pressable
        style={[styles.cell, styles.center]}
        onPress={() => inputHandler(row, col)}
      >
        <Text style={styles.input}>{grid[row][col]}</Text>
      </Pressable>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>SoonChokdi</Text>
      {grid.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.row}>
          {row.map((_, colIndex) => renderGridItem(rowIndex, colIndex))}
        </View>
      ))}
      <Text style={styles.text}>✖️ or ⭕</Text>
      <View style={styles.btnContainer}>
        <View style={styles.btn}>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            onPress={() => {
              setUserChoice("x");
            }}
          >
            <Text style={styles.input}>✖️</Text>
          </Pressable>
        </View>
        <View style={styles.btn}>
          <Pressable
            android_ripple={{ color: "#ccc" }}
            onPress={() => {
              setUserChoice("o");
            }}
          >
            <Text style={styles.input}>⭕</Text>
          </Pressable>
        </View>
      </View>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        onPress={() => {
          setGrid([
            ["", "", ""],
            ["", "", ""],
            ["", "", ""]
          ]);
          setUserChoice("");
        }}
      >
        <Text style={styles.restartBtn}>Restart</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  row: {
    flexDirection: "row"
  },
  cell: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: "#ccc"
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    fontSize: 50
  },
  btnContainer: {
    margin: 10,
    flexDirection: "row"
  },
  text: {
    margin: 25,
    fontSize: 30,
    fontWeight: "800",
    textAlign: "center",
    color:colors.blueColor
  },
  restartBtn: {
    fontSize: 25,
    margin: 5,
    width: 200,
    textAlign: "center",
    borderRadius: 8
  },
  btn: {
    marginHorizontal: 15,
    overflow: "hidden",
    borderRadius: 30
  },
  header: {
    marginBottom: 25,
    fontSize: 35
  }
});

export default Grid;
