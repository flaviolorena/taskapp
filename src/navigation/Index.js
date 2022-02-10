import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Notes from "../screens/Notes";
import AddNotes from "../screens/AddNotes";

const StackNavigator = createStackNavigator(
  {
    Notes: {
      screen: Notes,
    },
    AddNotes: {
      screen: AddNotes,
    },
  },
  {
    initialRouteName: "Notes",
    headerMode: "none",
    mode: "modal",
  }
);
export default createAppContainer(StackNavigator);
