import { useQuery } from "@apollo/client";
import { Link, Typography } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_MISSION } from "../../graphql/mission";

import "./Mission.css";

export const Mission = () => {
	const params = useParams();
	const { data } = useQuery(GET_MISSION, {
		variables: { id: params.id },
	});

	const mission = data?.mission;
	return (
		<div className="Mission">
			<Typography pt={5} variant="h1" color="white" fontWeight="bold">
				{mission?.name}
			</Typography>
			<Typography
				mt={30}
				mx={20}
				mb={10}
				variant="body1"
				fontSize={24}
				color="white"
			>
				{mission?.description}
			</Typography>

			<Link variant="h4" href={mission?.website} underline="hover">
				Read More
			</Link>
		</div>
	);
};
