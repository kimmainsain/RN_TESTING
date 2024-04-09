import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Main from "./src/screens/Main";
import Menu from "./src/screens/Menu";
import { CommonType } from "./src/types/NavigationType";

const App = () => {
	const Stack = createNativeStackNavigator<CommonType.RootStackPageList>();
	return (
		<>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Main"
					screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Main" component={Main} />
					<Stack.Screen name="Menu" component={Menu} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default App;
