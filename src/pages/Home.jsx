import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Card } from "../components/Card";
import { GET_MISSIONS } from "../graphql/missions";

export const Home = () => {
	const { data } = useQuery(GET_MISSIONS);
	const navigate = useNavigate();
	console.log(data);
	return (
		<div className="Missions">
			<Grid container spacing={2} justifyContent="center">
				{data?.missions?.map((mission) => (
					<Grid item onClick={() => navigate(`mission/${mission.id}`)}>
						<Card title={mission.name} description={mission.description} />
					</Grid>
				))}
			</Grid>
		</div>
	);
};
