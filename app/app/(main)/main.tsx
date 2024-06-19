import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { Redirect } from "expo-router";

export default function MainApp() {
	const { session, isLoading } = useAuth();

	if (isLoading) {
		return <Text>Loading...</Text>;
	}

	if (!session) {
		return <Redirect href={""} />;
	}
	return (
		<View style={styles.container}>
			<Text>Welcome to logged in main screen!</Text>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
