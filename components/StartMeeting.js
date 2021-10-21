import React from "react";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function StartMeeting({
  name,
  setName,
  roomId,
  setRoomId,
  joinRoom,
}) {
  return (
    <View style={styles.startMeetingContainer}>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter your name"
          placeholderTextColor="#767476"
        />
      </View>
      <View style={styles.info}>
        <TextInput
          style={styles.textInput}
          value={roomId}
          onChangeText={(text) => setRoomId(text)}
          placeholder="Enter room id"
          placeholderTextColor="#767476"
        />
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => joinRoom()}
          style={styles.startMeetingButton}
        >
          <Text style={{ color: "white", fontWeight: "bold" }}>
            Start Meeting
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  startMeetingButton: {
    width: 350,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0470DC",
    borderRadius: 15,
  },
  startMeetingContainer: {},
  info: {
    width: "100%",
    backgroundColor: "#373538",
    height: 50,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#484648",
    padding: 12,
    justifyContent: "center",
  },
  textInput: { color: "white", fontSize: 18 },
});
