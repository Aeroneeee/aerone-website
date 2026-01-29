import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { ColorModeScript } from '@chakra-ui/react';
import App from './App.jsx';
import theme from './customTheme.js';
import { Global } from '@emotion/react';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ChakraProvider theme={theme}>
			<Global
				styles={`@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap');`}
			/>
			<ColorModeScript
				initialColorMode={'theme.config.initialColorMode'}
			/>
			<App />
		</ChakraProvider>
	</React.StrictMode>
);
