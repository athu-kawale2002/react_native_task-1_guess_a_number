import React from "react";
import { Image, Text, View } from "react-native";
import { finishstyles } from "../utils/finish.styles";
import { IconButton } from "react-native-paper";

export const FinishGame = ({ rounds, number, replay, setIsGameOver }) => {
  const ReplayButton = () => {
    setIsGameOver(false);
    replay(false);
  };
  return (
    <>
      <View style={finishstyles.container}>
        <Text style={finishstyles.header}>Guess A Number</Text>
      </View>
      <View style={finishstyles.body}>
        <Text style={finishstyles.title}>The Game is Over!</Text>
        <View style={finishstyles.innercontainer}>
          <Image
            style={finishstyles.tinyLogo}
            source={require("../../assets/gameover.png")}
          />
        </View>

        <Text>
          Your Phone needed to {rounds} rounds to guess the number {number}
        </Text>

        <IconButton icon="replay" size={60} onPress={ReplayButton} />
      </View>
    </>
  );
};
