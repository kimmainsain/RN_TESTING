import { StyleSheet } from "react-native";
import {
	responsiveWidth,
	responsiveHeight,
} from "react-native-responsive-dimensions";

const mainHeaderLayout = StyleSheet.create({
	headerWrap: {
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderBottomWidth: 1,
		borderBottomColor: "#000",
	},
	headerIconWrap: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 15,
	},
	headerLogo: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	headerLogoImage: {
		width: responsiveWidth(40),
		height: responsiveHeight(5),
	},
	headerGiftBox: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	headerGiftBoxImage: {
		width: responsiveWidth(10),
		height: responsiveHeight(5),
	},
	headerInputBoxWrap: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 20,
		borderWidth: 1,
		backgroundColor: "#fff",
		width: responsiveWidth(90),
	},
	headerInputBox: {
		paddingHorizontal: 15,
		color: "#424242",
	},
	headerInputBoxBtn: {
    width: 30,
    height: 30,
	},
});

export default mainHeaderLayout;
