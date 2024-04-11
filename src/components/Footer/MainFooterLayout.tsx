import { StyleSheet } from "react-native";

const mainFooterLayout = StyleSheet.create({
	footerWrap: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
		backgroundColor: "#f0f0f0",
		padding: 10,
		borderTopWidth: 1,
		borderTopColor: "#000",
	},
	footerHome: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	footerHomeText: {
		fontSize: 15,
		fontWeight: "bold",
	},
	footerHomeImage: {
		width: 30,
		height: 30,
	},
	footerMyPage: {
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
	},
	footerMyPageText: {
		fontSize: 15,
		fontWeight: "bold",
	},
	footerMyPageImage: {
		width: 30,
		height: 30,
	},
});

export default mainFooterLayout;
