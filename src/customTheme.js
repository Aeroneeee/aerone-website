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
	// colors: (props) => ({
	// 	primary: mode('#e6f6e6', '#003100')(props),
	// 	secondary: '#009400',
	// 	text: mode('#FF0', '#00F')(props),
	// }),
	// fonts: {
	// 	heading: `'Manrope', sans-serif`,
	// 	body: `'Manrope', sans-serif`,
	// },
	config: {
		initialColorMode: 'dark',
		useSystemColorMode: true,
	},
});
