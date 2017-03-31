import React from 'react';

import Menu from './menu';
import Content from './content';

class App extends React.Component {
	constructor(props){
		super(props);
		// var links = [...];
		this.state = {
			links: [
				{url: '#/login', text: 'Login'},
				{url: '#/register', text: 'Register'},
				{url: '#/contact', text: 'Contact'},
				{url: '#/home', text: 'Home'}
			]
		}
	}

	render(){
		return (
			<main>
				<Menu nav={this.state.links} />
				<Content title="My Content Component" subtitle="A subtitle" text="I'm a text" size="100px" />
			{/* props: {title: "My Content Component", subtitle:"A subtitle", text: "I'm a text", size: "100px"} */}
			</main>
		)
	}
}

export default App;