import { getItemAsync, setItemAsync, deleteItemAsync } from "expo-secure-store";
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

async function setNativeStorage(key: string, value: string | null) {
	if (!value) {
		await deleteItemAsync(key);
		return;
	}

	await setItemAsync(key, value);
}

function setStorageItem(key: string, value: string | null) {
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

export type useStorageReturnType = [
	string | null,
	(value: string | null) => void,
	boolean
];

export default function useStorage(key: string): useStorageReturnType {
	const [value, setStorageValue] = useState<string | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	useEffect(() => {
		setIsLoading(true);
		if (Platform.OS === "web") {
			setStorageValue(getWebStorage(key));
			setIsLoading(false);
		} else {
			getNativeStorageAsync(key).then((value) => {
				setStorageValue(value);
				setIsLoading(false);
			});
		}
	}, [key]);

	const saveValue = useCallback(
		(value: string | null) => {
			setIsLoading(true);
			setStorageItem(key, value);
			setStorageValue(value);
			setIsLoading(false);
		},
		[key]
	);

	return [value, saveValue, isLoading];
}
