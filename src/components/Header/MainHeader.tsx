import React, { useEffect, useState } from "react";
import { Image, Text, View, TextInput, TouchableOpacity } from "react-native";
import mainHeaderLayout from "./MainHeaderLayout";
import HeaderLogo from "../../assets/react-native-logo.png";
import GiftBox from "../../assets/giftbox.png";
import SearchIcon from "../../assets/searchIcon.png";

const MainHeader = () => {
	const [text, setText] = useState<string>("");

	return (
		<>
			<View>
				<View style={mainHeaderLayout.headerWrap}>
					<View style={mainHeaderLayout.headerIconWrap}>
						<TouchableOpacity style={mainHeaderLayout.headerLogo}>
							<Image
								style={mainHeaderLayout.headerLogoImage}
								source={HeaderLogo}
							/>
						</TouchableOpacity>
						<TouchableOpacity style={mainHeaderLayout.headerGiftBox}>
							<Image
								style={mainHeaderLayout.headerGiftBoxImage}
								source={GiftBox}
							/>
						</TouchableOpacity>
					</View>
					<View style={mainHeaderLayout.headerInputBoxWrap}>
						<TouchableOpacity style={mainHeaderLayout.headerInputBoxBtn}>
							<Image
								source={SearchIcon}
								style={mainHeaderLayout.headerInputBoxBtn}></Image>
						</TouchableOpacity>
						<TextInput
							style={mainHeaderLayout.headerInputBox}
							onChangeText={setText}
							placeholder="ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ검색해 보세요."></TextInput>
					</View>
				</View>
			</View>
		</>
	);
};

export default MainHeader;
