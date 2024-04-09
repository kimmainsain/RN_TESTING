import { NativeStackScreenProps } from "@react-navigation/native-stack";

export declare module CommonType {
	export type RootStackPageList = {
		Main: undefined;
		Menu: undefined;
	};

	export type MainProps = NativeStackScreenProps<RootStackPageList, "Main">;
	export type MenuProps = NativeStackScreenProps<RootStackPageList, "Menu">;
}
