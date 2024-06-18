import { createContext } from "react";

type Authentication = {
	logIn: () => void;
	logOut: () => void;
	session?: string;
	isLoading: boolean;
};

const AuthContext = createContext<Authentication>({
	logIn: () => null,
	logOut: () => null,
	session: undefined,
	isLoading: false,
});

export default function useAuth() {}
