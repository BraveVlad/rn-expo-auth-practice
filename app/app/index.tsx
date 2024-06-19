import { Button, StyleSheet, Text, View } from "react-native";
import { useAuth } from "../hooks/useAuth";
import { Redirect, router } from "expo-router";

export default function PublicApp() {
	const { session, isLoading } = useAuth();

	function handleOnLogin(): void {
		router.push("/login");
	}

	if (isLoading) {
		return <Text>loading...</Text>;
	}

	if (session) {
		return <Redirect href="/main/" />;
	}

	return (
		<View style={styles.container}>
			<Text>Welcome to Auth practice!</Text>
			<Button onPress={handleOnLogin} title="Log In" />
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
