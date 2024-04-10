import React, { useState, useEffect } from "react";
import { Text, View, Button, TouchableOpacity } from "react-native";
import { CommonType } from "../types/NavigationType";

const Menu = ({ route, navigation }: CommonType.MenuProps) => {
	return (
		<View>
			<Text>Menu</Text>
			<TouchableOpacity>
				<Button title="Main" onPress={() => navigation.navigate("Main")} />
			</TouchableOpacity>
		</View>
	);
};

export default Menu;
