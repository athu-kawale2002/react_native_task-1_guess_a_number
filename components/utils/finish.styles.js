import { StyleSheet } from "react-native";

export const finishstyles = StyleSheet.create({
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
    flex: 0.9,
    marginTop: 90,
    paddingTop: 50,
    alignItems: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  innercontainer: {},
  tinyLogo: {
    width: 250,
    height: 250,
  },
});
