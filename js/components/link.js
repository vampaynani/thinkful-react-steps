import React from 'react';

export default function Link(props){
	return (
		<li><a href={props.url}>{props.text}</a></li>
	)
}