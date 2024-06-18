import { useEffect, useState } from "react";
import { Platform } from "react-native";

function getNativeStorage(key: string) {
	return "";
}

function getWebStorage(key: string) {
	return "";
}

export default function useStorage(key: string) {
	const [storageState, setStorageState] = useState<string | null>();

	useEffect(() => {
		if (Platform.OS !== "web") {
			// load from native storage using expo store module
			getNativeStorage(key);
		} else {
			setStorageState(getWebStorage(key));
		}
	});
}
