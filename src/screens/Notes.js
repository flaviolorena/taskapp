import React, { useState } from "react";
import { StyleSheet, View, FlatList } from "react-native";
import { Text, FAB, List } from "react-native-paper";
import Header from "../component/Header";
import { useSelector, useDispatch } from "react-redux";
import { addnote, deletenote } from "../reducer/notesApp";

function Notes({ navigation }) {
  // const [notes, setNotes] = useState([])
  const notes = useSelector((state) => state);
  const dispatch = useDispatch();

  const addNote = (note) => {
    console.log(note);
    dispatch(addnote(note));
  };

  const deleteNote = (id) => dispatch(deletenote(id));

  return (
    <>
      <Header titleText="Gerenciador de Tarefas" />
      <View style={styles.container}>
        {notes.length === 0 ? (
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Não há tarefas disponíveis </Text>
          </View>
        ) : (
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <List.Item
                title={item.note.noteTitle}
                description={[
                  " DESCRIÇÃO: ",
                  item.note.noteDescription,
                  " - DATA: ",
                  item.note.noteDate,
                ]}
                descriptionNumberOfLines={5}
                titleStyle={styles.listTitle}
                onPress={() => deleteNote(item.id)}
              />
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )}
        <Text style={styles.deleteInfo}> Clique no item para excluir </Text>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Adicionar tarefa"
          onPress={() =>
            navigation.navigate("AddNotes", {
              addNote,
            })
          }
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
  titleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
  deleteInfo: {
    fontSize: 14,
    color: "#FF6B6B",
    marginBottom: 25,
  },
  fab: {
    backgroundColor: "#4ECDC4",
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 10,
  },
  listTitle: {
    fontSize: 20,
  },
});

export default Notes;
