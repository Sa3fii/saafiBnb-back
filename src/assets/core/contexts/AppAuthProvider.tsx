import { createContext, useState, ReactNode } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

// Types for user and authenticated user
export type userType = { id: string; name: string; email: string };
export type authenticatedUserType = { id: string; name: string };

// Type for provider values
type providerValueTypes = {
  userToken: string;
  setUserToken: (value: string) => void;
  userData: userType;
  setUserData: (value: userType) => void;
  authenticatedUser: authenticatedUserType;
  setAuthenticatedUser: (value: authenticatedUserType) => void;
};

// Initialize the context with default values
export const AppAuthContext = createContext<providerValueTypes>({
  userToken: '',
  setUserToken: () => {},
  userData: { id: '', name: '', email: '' },
  setUserData: () => {},
  authenticatedUser: { id: '', name: '' },
  setAuthenticatedUser: () => {},
});

const AppAuthProvider = ({ children } : { children: ReactNode }) => {
  // Use local storage with default values
  const [userToken, setUserToken] = useLocalStorage('ACT');
  const [userData, setUserData] = useLocalStorage('userData');
  
  // Use state for authenticated user
  const [authenticatedUser, setAuthenticatedUser] = useState<authenticatedUserType>({ id: '', name: '' });

  // Provider value to be passed
  const providerValue: providerValueTypes = {
    userToken,
    setUserToken,
    userData,
    setUserData,
    authenticatedUser,
    setAuthenticatedUser,
  };

  return (
    <AppAuthContext.Provider value={providerValue}>
      {children}
    </AppAuthContext.Provider>
  );

};

export default AppAuthProvider;
