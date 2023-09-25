import { SafeAreaView, View } from "react-native";
import { HomeScreen } from "./components/screens/home.screen";
import androidSafeAreaView from "./utilities/android.safe.area.view";
import { useState } from "react";
import { GameScreen } from "./components/screens/game.screen";
import { FinishGame } from "./components/screens/finish.screen";

export default function App() {
  const [gameStart, setGameStart] = useState(false);
  const [getNum, setGetNum] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [rounds, setRounds] = useState(null);
  return (
    <SafeAreaView style={androidSafeAreaView.AndroidSafeArea}>
      {!gameStart ? (
        <HomeScreen setGameStart={setGameStart} setGetNum={setGetNum} />
      ) : !isGameOver ? (
        <GameScreen
          number={getNum}
          setIsGameOver={setIsGameOver}
          setRounds={setRounds}
        />
      ) : (
        <FinishGame
          rounds={rounds}
          number={getNum}
          replay={setGameStart}
          setIsGameOver={setIsGameOver}
        />
      )}
    </SafeAreaView>
  );
}
