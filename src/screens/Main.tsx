import React, { useEffect, useState } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import Timer from "../components/Timer/Timer";
import MainHeader from "../components/Header/MainHeader";
import MainFooter from "../components/Footer/MainFooter";

import { CommonType } from "../types/NavigationType";
const Main = ({ route, navigation }: CommonType.MainProps) => {
	return (
		<>
			<View
				style={{
					marginTop: 10,
					marginLeft: 10,
					marginRight: 10,
				}}>
				<MainHeader />
				<Timer />
				<MainFooter />
			</View>
		</>
	);
};

export default Main;
