import React, { useContext } from "react";
import styled from "styled-components";

import { IoLogoOctocat } from "react-icons/io";
import axios from "axios";
import { GlobalState } from "./GlobalStates";
const HomeScreen = () => {
	const {
		dataSearch,

		searchValue,
	} = useContext(GlobalState);
	// writing a function to map all products from database

	const [data, setData] = React.useState([]);
	const url = "https://image-grid-api.herokuapp.com/api/products";
	const FetchProducts = async () => {
		const res = await axios.get(url);
		// console.log(res.data.data);
		setData(res.data.data);
	};

	React.useEffect(() => {
		FetchProducts();
	}, []);

	return (
		<Holder>
			<br />
			<br />

			<h3>Recommended for you</h3>

			{searchValue ? (
				<Container>
					{dataSearch.map((props) => (
						<Wrapper key={props._id}>
							<MainImage src={props.image} />
							<Content>
								<Title>{props.title}</Title>
								<IoLogoOctocat />
							</Content>
						</Wrapper>
					))}
				</Container>
			) : (
				<div>
					<Container>
						{data.map((props) => (
							<Wrapper key={props._id}>
								<MainImage src={props.image} />
								<Content>
									<Title>{props.title}</Title>
									<IoLogoOctocat />
								</Content>
							</Wrapper>
						))}
					</Container>
				</div>
			)}

			{dataSearch.length <= 0 && searchValue ? <Text>Not found</Text> : null}
		</Holder>
	);
};

export default HomeScreen;

const Text = styled.div`
	font-size: 26px;
	color: white;

	font-weight: bold;
	color: gray;

	margin-top: 100px;
`;

const Title = styled.div`
	@media screen and (max-width: 768px) {
		font-size: 10px;
		text-align: center;
	}
`;

const Holder = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	flex-direction: column;

	h3 {
		color: white;
	}
`;

const Content = styled.div`
	display: none;
`;
const Wrapper = styled.div`
	flex: 25%;
	max-width: 25%;
	padding: 0 4px;

	border-radius: 10px;

	${Content}:hover {
		display: block;
	}
`;
const MainImage = styled.img`
	margin-top: 8px;
	vertical-align: middle;
	width: 100%;

	transition: all 350ms;

	border-radius: 10px;
	opacity: 0.7;

	&:hover ~ ${Content} {
		display: flex;

		color: white;
		justify-content: space-around;
		align-items: center;
		border: 2px solid rgba(249, 249, 249, 0.3);
		transition: all 350ms;
		background-image: linear-gradient(#1f212f, #1f212f, #000);
		background-repeat: no-repeat;
		width: 100%;
		cursor: pointer;
		height: 50px;
		z-index: 1;
		transform: scale(0.9);
		border: 2px solid rgba(249, 249, 249, 0.3);
		border-radius: 10px;
	}

	:hover {
		border: 2px solid rgba(249, 249, 249, 0.3);
		transform: scale(0.9);

		opacity: 1;

		border-radius: 10px;
	}
`;
const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	padding: 0 4px;

	justify-content: center;
`;
