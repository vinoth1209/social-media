import { createContext, useCallback, useContext, useState } from "react";

const StateContext = createContext();

const userDetail = {
  userId: localStorage.getItem("userId"),
  username: localStorage.getItem("username"),
  email: localStorage.getItem("email"),
};

export const ContextProvider = ({ children }) => {
  const [selected, setSelected] = useState("/home");
  const [homeDatas, setHomeDatas] = useState([]);
  const [userDetails, setUserDetails] = useState(userDetail);

  const handleSelected = useCallback(
    (path) => {
      setSelected(path);
    },
    [selected]
  );

  return (
    <StateContext.Provider
      value={{
        selected,
        handleSelected,
        homeDatas,
        setHomeDatas,
        userDetails,
        setUserDetails,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
