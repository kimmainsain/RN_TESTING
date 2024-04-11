import React, { useEffect, useState } from "react";
import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import MainBodyLayout from "./MainBodyLayout";
import axios from "axios";

const MainBody = () => {
	const [fox, setFox] = useState<string[]>([]);
	const [test, setTest] = useState<number[]>([1, 2, 3, 4]);
	const [needMedicine] = useState<string[]>([
		"AA",
		"BB",
		"CC",
		"DD",
	]);

	const getFox = async () => {
		const arr = [];
		for (let i = 0; i < 5; i++) {
			const result = await axios.get("https://randomfox.ca/floof/");
			arr.push(result.data.image);
		}
		console.log(arr);
		setFox(arr);
	};

	useEffect(() => {
		getFox();
	}, []);

	return (
		<>
			<View>
				<Text>네네넹</Text>
				<ScrollView horizontal={true}>
					{needMedicine.map((value: string, index: number) => {
						return (
							<View style={MainBodyLayout.bodyContentWrap} key={index}>
								<TouchableOpacity style={MainBodyLayout.bodyContentBtn}>
									<Text style={MainBodyLayout.bodyContentText}>{value}</Text>
								</TouchableOpacity>
							</View>
						);
					})}
				</ScrollView>
				<ScrollView horizontal={true}>
					{fox.map((image: string, index: number) => {
						return (
							<View key={index} style={MainBodyLayout.bodyImageContainerWrap}>
								<Image
									source={{ uri: image }}
									style={MainBodyLayout.bodyImage}></Image>
								<Text style={MainBodyLayout.bodyImageSubTitle}>
									{index + 1} : 제조
								</Text>
								<Text style={MainBodyLayout.bodyImageTitle}>
									{index + 1} + 타이틀
								</Text>
							</View>
						);
					})}
				</ScrollView>
				{test.map((test: number, index: number) => {
					return (
						<View key={index}>
							<Text>{test}</Text>
						</View>
					);
				})}
			</View>
		</>
	);
};

export default MainBody;
