import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import Loader from './components/Loader';
import { StatusBar } from 'react-native';

export default class App extends Component {

	constructor(...props) {
		super(...props);
		this.state = {
			loading: true
		};
	}

	componentDidMount() {
		setTimeout(() => {
			this.setState({
				loading: false
			});
		}, 1500);
	}

	render() {
		if (!this.state.loading) {
			return (
				<WebView source={{ uri: 'https://scratch-for-discord.netlify.app' }} style={{ marginTop: StatusBar.currentHeight }} />
			);
		} else {
			return <Loader />;
		}
	}

}