import React, { createContext } from "react";

export const GlobalState = createContext();

export const MainContext = ({ children }) => {
	const [dataSearch, setDataSearch] = React.useState([]);
	const [searchValue, setSearchValue] = React.useState("");
	const [loading, setLoading] = React.useState(false);
	return (
		<GlobalState.Provider
			value={{
				dataSearch,
				setDataSearch,
				searchValue,
				setSearchValue,
				loading,
				setLoading,
			}}>
			{children}
		</GlobalState.Provider>
	);
};
