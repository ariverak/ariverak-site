import React from 'react'
import { createUseStyles } from 'react-jss'

const box = 200;
const boxChild = 100;

const useStyles = createUseStyles({
	root: {
		// backgroundColor: '#ededed',
		width: box,
		height: box,
		display: 'flex',
		flexWrap: 'wrap',
		background: 'white',
		'& div': {
			width: boxChild,
			height: boxChild,
			'&:nth-child(1)': {
				backgroundColor: 'white',
			},
			'&:nth-child(2)': {
				backgroundColor: '#ededed',
				borderTopLeftRadius: boxChild
			},
			'&:nth-child(3)': {
				position: 'relative',
				backgroundColor: 'transparent',
				borderBottomRightRadius: boxChild,
				boxShadow: '15px 15px 0px 15px #ededed'
			},
			'&:nth-child(4)': {
				backgroundColor: '#ededed'
			},
			'& div': {
        width: boxChild,
        height: boxChild,
      }
		}
	}
});

export default function LeftCorder(){
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<div/>
			<div/>
			<div/>
			<div/>
		</div>
	)
}