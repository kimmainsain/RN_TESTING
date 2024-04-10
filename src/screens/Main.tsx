import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import Timer from "../components/Timer/Timer";

import { CommonType } from "../types/NavigationType";
const Main = ({ route, navigation }: CommonType.MainProps) => {
	return (
		<>
			<View>
				<Text>Main</Text>
				<Timer />
				<TouchableOpacity>
					<Button title="Menu" onPress={() => navigation.navigate("Menu")} />
				</TouchableOpacity>
			</View>
		</>
	);
};

export default Main;
