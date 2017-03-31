import React from 'react';

//var props = {title: "My Content Component", subtitle:"A subtitle", text: "I'm a text", size: "100px"}
export default function Content(props){
	return (
		<section>
			<h1>{props.title}</h1>
			<h2>{props.subtitle}</h2>
			<p>{props.text}</p>
			<p style={{backgroundColor:'red', width: props.size}}>Another cool content</p>
		</section>
	)
}