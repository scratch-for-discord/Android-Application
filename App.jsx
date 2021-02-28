import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import Loader from './components/Loader';
import { StatusBar } from 'react-native';
import Error from './components/Error';

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
		}, 2000);
	}

	render() {
		if (!this.state.loading) {
			return (
				<WebView 
					source={{ uri: 'https://scratch-for-discord.netlify.app' }} 
					style={{ marginTop: StatusBar.currentHeight }}
					userAgent=''
					startInLoadingState={true}
					renderError={(name) => <Error message={name} />}
					renderLoading={() => <Loader message='Loading...' showVersion='false' />}
				/>
			);
		} else {
			return <Loader message='Scratch For Discord' showVersion='true' />;
		}
	}

}