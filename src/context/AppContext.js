import React, {useState} from "react";

const AppContext = React.createContext();

export const AppProvider = ({children}) => {
    const [reward, setReward] = useState(0);

    return(
        <AppContext.Provider value={{reward, setReward}}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider;