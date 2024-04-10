import { StyleSheet } from "react-native";

const timerLayout = StyleSheet.create({
	timerWrap: {
		borderWidth: 1,
		borderColor: "black",
		borderRadius: 5,
		padding: 10,
		margin: 10,
	},
	timerHeader: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	timerHeaderText: {
		fontSize: 30,
		fontWeight: "bold",
		color: "#0000FF",
	},
	timerBody: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 10,
	},
	timerBodyText: {
		fontSize: 20,
		fontWeight: "bold",
	},
	timerButton: {
		flexDirection: "row",
		justifyContent: "space-around",
		alignItems: "center",
	},
});

export default timerLayout;
