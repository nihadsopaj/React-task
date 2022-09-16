import React from "react";

import {
	Card as MaterialCard,
	CardContent,
	CardMedia,
	Typography,
} from "@mui/material";

import "./Card.css";

export const Card = (props) => {
	return (
		<MaterialCard className="Card" sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				alt="mission"
				height="140"
				image="https://www.teslarati.com/wp-content/uploads/2022/02/Falcon-Heavy-liftoff-from-39A-2-SpaceX-crop-c.jpg"
				href="#"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div" noWrap>
					{props.title}
				</Typography>
				<Typography
					className="Card__description"
					variant="body2"
					color="text.secondary"
				>
					{props.description}
				</Typography>
			</CardContent>
		</MaterialCard>
	);
};
