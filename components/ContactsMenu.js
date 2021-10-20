import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

const contactsMenuButtons = [
  {
    type: "starred",
    name: "Starred",
  },
  {
    type: "contact",
    name: "Mehtab Alam",
    photo: require("../assets/mehtab.jpg"),
  },
  {
    type: "contact",
    name: "Hashir",
    photo: require("../assets/hashir.jpg"),
  },
  {
    type: "ontact",
    name: "Saqib",
    photo: require("../assets/saqib.jpg"),
  },
  {
    type: "contact",
    name: "Samar",
    photo: require("../assets/samar.jpg"),
  },
];

export default function ContactsMenu() {
  return (
    <View style={styles.container}>
      {/* contact container */}
      {contactsMenuButtons.map((contact, index) => (
        <View style={styles.row} key={index}>
          {/* image */}
          {contact.type === "starred" ? (
            <View style={styles.starredIcon}>
              <AntDesign name="star" size={30} color="#efefef" />
            </View>
          ) : (
            <Image source={contact.photo} style={styles.image} />
          )}

          {/* text */}
          <Text style={styles.text}>{contact.name}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  row: {
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
  },
  starredIcon: {
    backgroundColor: "#333333",
    width: 55,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  text: {
    color: "white",
    paddingLeft: 15,
    fontSize: 18,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 20,
  },
});
