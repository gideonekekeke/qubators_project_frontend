import React from "react";
import HomeScreen from "./HomeScreen";
import styled from "styled-components";
import HeaderView from "./HeaderView";

const ComponentsHold = () => {
	return (
		<Container>
			<HeaderView />
			<HomeScreen />
		</Container>
	);
};

export default ComponentsHold;

const Container = styled.div``;
