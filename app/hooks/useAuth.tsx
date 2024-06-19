import { PropsWithChildren, createContext, useContext } from "react";
import useStorage from "./useStorage";

type Authentication = {
	logIn: () => void;
	logOut: () => void;
	session: string | null;
	isLoading: boolean;
};

const AuthContext = createContext<Authentication>({
	logIn: () => null,
	logOut: () => null,
	session: null,
	isLoading: false,
});

export function useAuth() {
	const authContext = useContext(AuthContext);

	if (!authContext) throw new Error(`useAuth must be used inside AuthProvider`);

	return authContext;
}

export function AuthProvider({ children }: PropsWithChildren) {
	const [session, saveSession, isLoading] = useStorage("auth-storage");

	return (
		<AuthContext.Provider
			value={{
				logIn: () => {
					//login logic
					saveSession("STUB FOR SESSION KEY / USERNAME");
				},
				logOut: () => {
					saveSession(null);
				},
				session,
				isLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}
