import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../../hooks/useAuth";
import { router } from "expo-router";

export default function MainApp() {
	const { logOut } = useAuth();

	function handleLogOut(): void {
		logOut();
		router.replace("/");
	}

	return (
		<View style={styles.container}>
			<Text>Welcome to logged in main screen!</Text>
			<Button title="Log Out" onPress={handleLogOut} />
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
