import { Redirect, Slot } from "expo-router";
import { useAuth } from "../../hooks/useAuth";
import { Text } from "react-native";

export default function MainLayout() {
	const { session, isLoading } = useAuth();

	if (isLoading) {
		return <Text>Loading...</Text>;
	}

	if (!session) {
		return <Redirect href={"/login"} />;
	}

	return <Slot />;
}
