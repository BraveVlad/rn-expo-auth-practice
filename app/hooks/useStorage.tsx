import { getItemAsync } from "expo-secure-store";
import { useEffect, useState } from "react";
import { Platform } from "react-native";

async function getNativeStorage(key: string) {
	return await getItemAsync(key);
}

function getWebStorage(key: string) {
	try {
		return localStorage.getItem(key);
	} catch (error) {
		throw new Error(`Unable to use local storage ${error}`);
	}
}

export default function useStorage(key: string) {
	const [storageState, setStorageState] = useState<string | null>();

	useEffect(() => {
		const getFromStorage = async () => {
			const loadedData =
				Platform.OS === "web"
					? getWebStorage(key)
					: await getNativeStorage(key);
			setStorageState(loadedData);
		};

		getFromStorage();
	}, [key]);
}
