import MyContext from "./MyContext";

const MyProvider = ({children}) => {



return (
    <MyContext.Provider value={{




    }}
    >



{children}

        </MyContext.Provider>

)
}

export default MyProvider