import React from 'react';
import { Box, Flex, useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import Name from 'components/Name';
import Description from 'components/Description';

function Main() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box my={['2em', '8em']} mx={['2em', '8em']}>
			<Flex justifyContent='center' mb='2em'>
				<IconButton
					color='primary'
					onClick={toggleColorMode}
					icon={colorMode == 'light' ? <SunIcon /> : <MoonIcon />}
				/>
			</Flex>
			<Name />
			<Description />
		</Box>
	);
}

export default Main;
