import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";

import { CommonType } from "../types/NavigationType";
const Main = ({ route, navigation }: CommonType.MainProps) => {

	const [time, setTime] = useState<number>(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setTime((prev) => prev + 1);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<>
			<View>
				<Text>Main</Text>
				<Text>{time}</Text>
				<TouchableOpacity>
					<Button title="Menu" onPress={() => navigation.navigate("Menu")} />
				</TouchableOpacity>
			</View>
		</>
	);
};

export default Main;
