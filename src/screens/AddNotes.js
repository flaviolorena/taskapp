import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Text, IconButton, TextInput, FAB } from "react-native-paper";
import Header from "../component/Header";

function AddNotes({ navigation }) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteDescription, setNoteDescription] = useState("");
  const [noteDate, setNoteDate] = useState("");

  function onSaveNote() {
    navigation.state.params.addNote({ noteTitle, noteDescription, noteDate });
    navigation.goBack();
  }

  return (
    <>
      <Header titleText="Adicionar nova tarefa" />
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />

      <View style={styles.container}>
        <TextInput
          label="Título da tarefa"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Descrição da tarefa"
          value={noteDescription}
          onChangeText={setNoteDescription}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <TextInput
          label="Data da tarefa"
          value={noteDate}
          onChangeText={setNoteDate}
          mode="flat"
          multiline={true}
          style={styles.data}
          scrollEnabled={true}
          returnKeyLabel="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={noteTitle == "" ? true : false}
          onPress={() => onSaveNote()}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  iconButton: {
    backgroundColor: "#FF6B6B",
    position: "absolute",
    right: 0,
    top: 5,
    margin: 10,
  },
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 16,
    backgroundColor: "#F7FFF7",
  },
  text: {
    height: 300,
    fontSize: 16,
    backgroundColor: "#F7FFF7",
  },
  data: {
    height: 60,
    fontSize: 16,
    backgroundColor: "#F7FFF7",
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 0,
    backgroundColor: "#4ECDC4",
  },
});

export default AddNotes;
