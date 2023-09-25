import { StyleSheet } from "react-native";

export const homestyles = StyleSheet.create({
  container: {
    flex: 0.1,
    backgroundColor: "rgba(247, 243, 249, 1)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.2,
  },
  header: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
  },
  body: {
    paddingTop: 15,
    flex: 0.9,
    alignItems: "center",
  },
  textupper: {
    fontSize: 18,
    padding: 12,
  },
  textInput: {
    borderBottomWidth: 1,
    textAlignVertical: "top",
    textAlign: "center",
    margin: 10,
    width: 40,
  },
  content: {
    alignItems: "center",
  },
  cardstyle: {
    padding: 15,
    width: "80%",
  },
  cardstyle1: {
    marginTop: 30,
    padding: 15,
    width: "50%",
  },
  button1: {
    marginRight: "auto",
  },
  alignbutton: {
    alignItems: "center",
  },
});
