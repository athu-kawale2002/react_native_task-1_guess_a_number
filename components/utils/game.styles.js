import { StyleSheet } from "react-native";

export const gamestyles = StyleSheet.create({
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
  viewupper: {
    alignItems: "center",
    paddingVertical: 20,
  },
  texttype1: { padding: 10, borderWidth: 1, borderRadius: 5 },
  body: {
    flex: 0.9,
  },
  cardbody: {
    padding: 20,
  },
  iconbuttons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  flatlistview: {
    alignItems: "center",
  },
  flatlistitem: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 8,
    borderWidth: 1,
    borderRadius: 3,
  },
  itemdirection: {
    flexDirection: "row",
  },
  itempadding: { paddingHorizontal: 92 },
});
