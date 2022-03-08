import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { BiSearchAlt2 } from "react-icons/bi";
import axios from "axios";
import { GlobalState } from "./GlobalStates";
const HeaderView = () => {
	const {
		setDataSearch,
		searchValue,
		setSearchValue,

		setLoading,
	} = useContext(GlobalState);

	// function for searching data by name or category

	const FetchProducts = async (query) => {
		setSearchValue(query);
		if (!query) {
			return;
		}
		setLoading(true);
		const url = `https://image-grid-api.herokuapp.com/api/products/search?search=${searchValue}`;
		const res = await axios.get(url);
		// console.log("fghm", res.data);
		setDataSearch(res.data);
	};

	useEffect(() => {
		FetchProducts();
		// console.log("testing", dataSearch);
	}, []);

	return (
		<Container>
			<Logo>IMAGE GRID</Logo>
			<InputHold>
				<span>
					<BiSearchAlt2 />
				</span>
				<input
					onChange={(e) => FetchProducts(e.target.value)}
					placeholder='Search for items or product..'
				/>
			</InputHold>

			<ButtonHold>Login</ButtonHold>
		</Container>
	);
};

export default HeaderView;

const InputHold = styled.div`
	background: rgba(249, 249, 249, 0.8);
	align-items: center;
	display: flex;
	/* justify-content: center; */

	height: 40px;
	width: 400px;
	outline: none;

	border-top-right-radius: 10px;

	:hover {
		background-color: white;
	}

	span {
		color: black;
		font-size: 20px;
		margin-left: 10px;
		margin-top: 5px;
	}

	@media screen and (max-width: 768px) {
		width: 200px;
	}
`;

const ButtonHold = styled.div`
	width: 120px;
	height: 40px;

	border: 1px solid rgba(249, 249, 249, 0.1);

	display: flex;
	justify-content: center;
	align-items: center;
	font-weight: bold;
	cursor: pointer;
	border-radius: 5px;

	@media screen and (max-width: 768px) {
		display: none;
	}

	:hover {
		background-color: gray;
	}
`;

const Logo = styled.div`
	/* margin: 100px;/ */
	color: white;
	font-weight: bold;

	@media screen and (max-width: 768px) {
		margin: 0;
	}
`;

const Container = styled.div`
	height: 70px;
	width: 100%;
	background: #11131c;

	color: white;
	display: flex;
	align-items: center;
	position: sticky;
	top: 0;
	z-index: 10;

	justify-content: space-around;

	input {
		height: 30px;
		border: none;
		outline: none;
		background-color: transparent;
		width: 100%;
	}
`;
