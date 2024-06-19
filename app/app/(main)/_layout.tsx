import { Redirect, Slot } from "expo-router";
import { useAuth } from "../../hooks/useAuth";
import { Text, View } from "react-native";

export default function MainLayout() {
	const { session, isLoading } = useAuth();

	if (isLoading) {
		return <View></View>;
	}

	if (!session) {
		return <Redirect href={"/login"} />;
	}

	return <Slot />;
}
