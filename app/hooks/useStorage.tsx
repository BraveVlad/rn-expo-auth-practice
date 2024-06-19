import { getItemAsync } from "expo-secure-store";
import { useCallback, useEffect, useState } from "react";
import { Platform } from "react-native";

function setWebStorage(key: string, value: string | null) {
	try {
		if (!value) {
			localStorage.removeItem(key);
			return;
		}

		localStorage.setItem(key, value);
	} catch (error) {
		throw new Error(`Unable to use local storage ${error}`);
	}
}

function setNativeStorage(key: string, value: string | null) {
	if (!value) {
		// delete
	}

	// set  storage
}

function setStorageItemAsync(key: string, value: string | null) {
	if (Platform.OS === "web") {
		setWebStorage(key, value);
	} else {
		setNativeStorage(key, value);
	}
}

async function getNativeStorageAsync(key: string) {
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
		if (Platform.OS === "web") {
			setStorageState(getWebStorage(key));
		} else {
			getNativeStorageAsync(key).then((value) => setStorageState(value));
		}
	}, [key]);

	const saveValue = useCallback(
		(value: string | null) => {
			setStorageState(value);
			setStorageItemAsync(key, value);
		},
		[key]
	);

	return [storageState, saveValue];
}
