import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Groups } from "@screens/Groups";
import { NewGroup } from "@screens/NewGroup";
import { Players } from "@screens/Players";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar  
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      { fontLoaded ?  <Players /> : <Loading />}
    </ThemeProvider>
  );
}