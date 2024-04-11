import { StyleSheet } from "react-native";

const MainBodyLayout = StyleSheet.create({
	bodyTitle: {
		flexDirection: "row",
		paddingLeft: 10,
		paddingBottom: 15,
	},
	bodyTitleText: {
		fontSize: 30,
		fontWeight: "bold",
	},
	bodyContentWrap: {
		backgroundColor: "#f0f0f0",
		paddingHorizontal: 5,
		marginBottom: 10,
	},
	bodyContentBtn: {
		borderRadius: 10,
		padding: 5,
		borderWidth: 1,
	},
	bodyContentText: {
		fontSize: 15,
		fontWeight: "bold",
	},
	bodyImageContainerWrap: {
		marginRight: 5,
		marginLeft: 10,
	},
	bodyImage: {
		width: 100,
		height: 100,
	},
	bodyImageSubTitle: {
		fontSize: 15,
		color: "#a9a9a9",
	},
	bodyImageTitle: {
		fontSize: 17,
		fontWeight: "bold",
	},
});

export default MainBodyLayout;
