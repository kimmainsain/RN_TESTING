import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity, ScrollView } from "react-native";
import Timer from "../components/Timer/Timer";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";
import MainBody from "../components/Body/MainBody";

import { CommonType } from "../types/NavigationType";
const Main = ({ route, navigation }: CommonType.MainProps) => {
	return (
		<>
			<View
				style={{
					flex: 1,
				}}>
				<MainHeader />
				<ScrollView>
					<Timer />
					<Button title="Menu" onPress={() => navigation.navigate("Menu")} />
					<MainBody />
				</ScrollView>
				<MainFooter />
			</View>
		</>
	);
};

export default Main;
