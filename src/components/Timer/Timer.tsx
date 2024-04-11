import React, { useEffect, useState } from "react";
import { Text, View, Button, NativeModules } from "react-native";
import TimerLayout from "./TimerLayout";

const { TimerModule } = NativeModules;

const Timer = () => {
	const [time, setTime] = useState<number>(0);

	const resetTime = () => {
		console.log("reset");
	};

	const stopTime = () => {
		console.log("stop");
	};

	const startTime = () => {
		console.log("start");
	};

	const pauseTime = () => {
		console.log("pause");
	};

	const getNumber = async (number: number) => {
		const response = await TimerModule.getNumber(number);
		console.log("getNumber");
	};

	useEffect(() => {
		console.log("useEffect");
	}, []);

	return (
		<>
			<View>
				<View style={TimerLayout.timerWrap}>
					<View style={TimerLayout.timerHeader}>
						<Text style={TimerLayout.timerHeaderText}>
							{`Timer Module`}
						</Text>
					</View>
					<View style={TimerLayout.timerBody}>
						<Text style={TimerLayout.timerBodyText}>Time</Text>
						<Text style={TimerLayout.timerBodyText}> : </Text>
						<Text style={TimerLayout.timerBodyText}>{time}</Text>
					</View>
					<View style={TimerLayout.timerButton}>
						<Button title="Reset" onPress={resetTime} />
						<Button title="Stop" onPress={stopTime} />
						<Button title="Start" onPress={startTime} />
						<Button title="Pause" onPress={pauseTime} />
					</View>
				</View>
				<View style={TimerLayout.timerButton}>
					<Button title="Get Number" onPress={() => getNumber(10)} />
				</View>
			</View>
		</>
	);
};

export default Timer;
