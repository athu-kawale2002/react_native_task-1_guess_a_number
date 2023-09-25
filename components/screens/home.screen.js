import React from "react";
import { Text, TextInput, View } from "react-native";
import { homestyles } from "../utils/home.styles";
import { Card, Button } from "react-native-paper";
import { useState } from "react";

export const HomeScreen = ({ setGameStart, setGetNum }) => {
  const [number, setNumber] = useState(null);
  const [cardEnable, setCardEnable] = useState(false);
  const Reset = () => {
    setNumber(null);
    setCardEnable(false);
  };
  const GameStartInitiated = () => {
    setGetNum(number);
    setGameStart(true);
  };
  return (
    <>
      <View style={homestyles.container}>
        <Text style={homestyles.header}>Guess A Number</Text>
      </View>
      <View style={homestyles.body}>
        <Text style={homestyles.textupper}>Start a new Game!</Text>
        {/* Card Start */}
        <Card style={homestyles.cardstyle} elevation={7}>
          <Card.Content style={homestyles.content}>
            <Text variant="bodyMedium">Select a Number</Text>
            <TextInput
              onChangeText={setNumber}
              value={number}
              selectionColor="red"
              style={homestyles.textInput}
            />
          </Card.Content>
          <Card.Actions>
            <Button onPress={Reset} style={homestyles.button1}>
              Reset
            </Button>
            <Button onPress={setCardEnable}>Confirm</Button>
          </Card.Actions>
        </Card>
        {/* Card End */}

        {/* Card Start */}
        {cardEnable && (
          <Card style={homestyles.cardstyle1} elevation={7}>
            <Card.Content style={homestyles.content}>
              <Text variant="bodyMedium">You Selected!</Text>
              <View style={{ padding: 10 }}>
                <Text style={{ padding: 2, borderWidth: 1 }}>{number}</Text>
              </View>
            </Card.Content>
            <View style={homestyles.alignbutton}>
              <Card.Actions>
                <Button onPress={GameStartInitiated}>Start Game!</Button>
              </Card.Actions>
            </View>
          </Card>
        )}
        {/* Card End */}
      </View>
    </>
  );
};
