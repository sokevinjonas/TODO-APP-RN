import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Text style={styles.text}>Bonjour Ceci es mon 1er projet en React Native.</Text>
      <Link href={'/about'}>Cliquez ici </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     flex: 1,
      justifyContent: "center",
      alignItems: "center",
      padding: 16
  },
  text:{
    fontSize:20
  }
});