import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import MainFooterLayout from "./MainFooterLayout";
import HomeNotSelected from "../../assets/teenyicons_home-outline.png";
import HomeSelected from "../../assets/teenyicons_home-solid.png";
import MyPageNotSelected from "../../assets/Account.png";

const MainFooter = () => {
	return (
		<>
			<View>
				<View style={MainFooterLayout.footerWrap}>
					<TouchableOpacity
						style={MainFooterLayout.footerHome}
						// onPress={() => navigation.navigate("Main")}
					>
						<Image
							style={MainFooterLayout.footerHomeImage}
							source={HomeNotSelected}
						/>
						<Text style={MainFooterLayout.footerHomeText}>홈</Text>
					</TouchableOpacity>
					<TouchableOpacity
						style={MainFooterLayout.footerMyPage}
						// onPress={() => navigation.navigate("MyPage")}
					>
						<Image
							style={MainFooterLayout.footerMyPageImage}
							source={MyPageNotSelected}
						/>
						<Text style={MainFooterLayout.footerMyPageText}>마이페이지</Text>
					</TouchableOpacity>
				</View>
			</View>
		</>
	);
};

export default MainFooter;
