import { Redirect, Slot } from "expo-router";
import { useSafeAreaFrame } from "react-native-safe-area-context";
import { useAuth } from "../../hooks/useAuth";
import { Text } from "react-native";

export default function AuthLayout() {
	const { session, isLoading } = useAuth();

	if (isLoading) {
		return <Text>Loading...</Text>;
	}
	if (session) {
		return <Redirect href="/main/" />;
	}

	return <Slot />;
}
