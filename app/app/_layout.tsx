import { Slot } from "expo-router";
import { AuthProvider } from "../hooks/useAuth";

export default function MainPublicLayout() {
	return (
		<AuthProvider>
			<Slot />
		</AuthProvider>
	);
}
