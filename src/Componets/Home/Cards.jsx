import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editData } from "../../Redux/Acctions/index.js";
import { makeStyles } from '@material-ui/core/styles';
import {
	Card,
	CardActions,
	CardContent,
	Button,
	Typography,
	TextField,
} from '@material-ui/core';

const useStyles = makeStyles({
	root: {
		minWidth: 275,
		margin: '1rem',
		backgroundColor: '#fff',
		boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.1)',
		borderRadius: '5px',
		padding: '1rem',
		'& .MuiTextField-root': {
			margin: '0.5rem 0',
			width: '100%',
		},
	},
	title: {
		fontSize: 18,
	},
	pos: {
		marginBottom: 12,
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	button: {
		backgroundColor: 'red',
		color: '#fff',
		margin: '0.5rem 0',
		'&:hover': {
			backgroundColor: '#b30000',
		}
	}
});

const CardComponent = ({ UserID, userName, date, punchIn, punchOut, open, id }) => {
	const [edit, setEdit] = useState(false)
	const dispatch = useDispatch();

	const [editD, setEditD] = useState({
		id,
		"UserID": "",
		"userName": "",
		"date": "",
		"punchIn": "",
		"punchOut": ""
	})

	const editDataB = () => {
		setEdit(!edit)
	}

	function handleChange(e) {
		setEditD({
			...editD,
			[e.target.name]: e.target.value,
		});
	}

	function handleSubmit(e) {
		dispatch(editData(editD));
		alert("save");
		setEditD({
			"UserID": "",
			"userName": "",
			"date": "",
			"punchIn": "",
			"punchOut": ""
		});
	}

	const classes = useStyles();

	return (
		<Card className={classes.root}>
			{open ? <Button className={classes.button} onClick={() => editDataB()}>edit</Button> : null}
			<CardContent className={classes.container}>
				<Typography className={classes.title} variant="h1" component="h1">
				UserID: {UserID}
				</Typography>
				{edit ? (
					<TextField
						placeholder="UserID"
						type="text"
						value={editD.UserID}
						name="UserID"
						onChange={(e) => handleChange(e)}
						variant="outlined"
					/>
				) : null}
				<Typography className={classes.pos} color="textSecondary">
				userName: {userName}
				</Typography>
				{edit ? (
					<TextField
						placeholder="userName"
						type="text"
						value={editD.userName}
						name="userName"
						onChange={(e) => handleChange(e)}
						variant="outlined"
					/>
				) : null}
				<Typography className={classes.pos} color="textSecondary">
				date: {date}
				</Typography>
				{edit ? (
					<TextField
						placeholder="date"
						type="date"
						value={editD.date}
						name="date"
						onChange={(e) => handleChange(e)}
						variant="outlined"
					/>
				) : null}
				<Typography className={classes.pos} color="textSecondary">
				punchIn: {punchIn}
				</Typography>
				{edit ? (
					<TextField
						placeholder="punchIn"
						type="tex"
						value={editD.punchIn}
						name="punchIn"
						onChange={(e) => handleChange(e)}
						variant="outlined"
					/>
				) : null}
				<Typography className={classes.pos} color="textSecondary">
				punchOut: {punchOut}
				</Typography>
				{edit ? (
					<TextField
						placeholder="punchOut"
						type="tex"
						value={editD.punchOut}
						name="punchOut"
						onChange={(e) => handleChange(e)}
						variant="outlined"
					/>
				) : null}
				{edit ? <Button className={classes.button} onClick={() => handleSubmit()}>SAVE</Button> : null}
			</CardContent>
		</Card>
)}

export default CardComponent;