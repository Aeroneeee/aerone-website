// import { theme as chakraTheme } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

export default extendTheme({
	styles: {
		global: (props) => ({
			'html, body': {
				background: mode('#FFF', '#1A1A1A')(props),
			},
		}),
	},
	fonts: {
		body: 'Manrope',
		heading: 'Manrope',
	},
	colors: {
		primary: '#007ACC',
		secondary: '#009400',
	},
	// colors: (props) => ({
	// 	primary: '#007ACC',
	// 	secondary: '#009400',
	//  text: mode('#FF0', '#00F')(props),
	// }),
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: true,
	},
});
