import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function LoginScreen() {
	const [username, setUsername] = useState<string>("");

	function handleLogin(): void {
		console.log(username);
	}

	return (
		<View style={styles.container}>
			<Text>Welcome to login!</Text>
			<TextInput
				id="login-username"
				placeholder="Type your username here."
				value={username}
				onChangeText={(text) => setUsername(text)}
				autoComplete="username"
			/>
			<Button title="Log In" onPress={handleLogin} />
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
