import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen
      name="index"
      options={{
        title: "Accueil",
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    />
    <Stack.Screen
      name="about"
      options={{
        title: "A propos",
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    />
  </Stack>;
}
