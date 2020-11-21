import { AppContainer } from 'react-hot-loader';
import React from 'react';
import { render } from 'react-dom';
import App from './App.js';

render(
	<AppContainer>
	<App />
	</AppContainer>,
    document.getElementById('root')
);
