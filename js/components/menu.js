import React from 'react';

import Link from './link';

export default function Menu(props){
	var links = [];
	for(var i = 0; i < props.nav.length; i++){
		links.push(<Link url={props.nav[i].url} text={props.nav[i].text} />);
	}
	//Render
	return (
		<nav>
			<ul>
				{links}
			</ul>
		</nav>
	)
}