import React, { useState, useEffect, useRef } from "react";
import { Text, View, FlatList, Alert } from "react-native";
import { gamestyles } from "../utils/game.styles";
import { Card, IconButton } from "react-native-paper";

const generateRandom = (min, max, selectednum) => {
  let rndNum;

  do {
    rndNum = Math.floor(Math.random() * (max - min)) + min;
  } while (rndNum === selectednum);

  return rndNum;
};

export const GameScreen = ({ number, setIsGameOver, setRounds }) => {
  const [Guess, setGuess] = useState(generateRandom(1, 100, number));
  const [listGuess, setListGuess] = useState([Guess]);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const [round, setRound] = useState(0);

  const MinusPressed = () => {
    if (Guess < number) {
      setRound(round + 1);
      Alert.alert("Don't lie!!", "You know that this is wrong.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    currentHigh.current = Guess;
    const nextNumber = generateRandom(
      currentLow.current,
      currentHigh.current,
      Guess
    );
    setGuess(nextNumber);
    setListGuess((listGuess) => [nextNumber, ...listGuess]);
  };
  const PlusPressed = () => {
    if (Guess > number) {
      setRound(round + 1);
      Alert.alert("Don't lie!!", "You know that this is wrong.", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }
    currentLow.current = Guess + 1;

    const nextNumber = generateRandom(
      currentLow.current,
      currentHigh.current,
      Guess
    );
    setGuess(nextNumber);
    setListGuess((listGuess) => [nextNumber, ...listGuess]);
  };

  useEffect(() => {
    const numberAsNumber = parseInt(number); // Convert number to a number type
    if (Guess === numberAsNumber) {
      setRounds(listGuess.length - 1 + round);
      setIsGameOver(true);
    }
  }, [Guess, number]);

  const Item = ({ count, id }) => (
    <View style={gamestyles.itemdirection}>
      <Text>#{id}</Text>
      <View style={gamestyles.itempadding}></View>
      <Text>{count}</Text>
    </View>
  );
  return (
    <>
      <View style={gamestyles.container}>
        <Text style={gamestyles.header}>Guess A Number</Text>
      </View>
      <View style={gamestyles.body}>
        <View style={gamestyles.viewupper}>
          <Text style={{ fontSize: 20, paddingBottom: 20 }}>
            Opponents Guess!
          </Text>
          <Text style={gamestyles.texttype1}>{Guess}</Text>
        </View>
        <View style={gamestyles.cardbody}>
          <Card>
            <Card.Content style={gamestyles.content}>
              <View style={gamestyles.iconbuttons}>
                <IconButton icon="minus-box" size={50} onPress={MinusPressed} />
                <IconButton icon="plus-box" size={50} onPress={PlusPressed} />
              </View>
            </Card.Content>
          </Card>
        </View>
        <View style={gamestyles.flatlistview}>
          <FlatList
            data={listGuess}
            renderItem={({ item }) => {
              return (
                <View style={gamestyles.flatlistitem}>
                  <Item count={item} id={listGuess.indexOf(item)} />
                </View>
              );
            }}
            keyExtractor={(item) => listGuess.indexOf(item)}
          />
        </View>
      </View>
    </>
  );
};
