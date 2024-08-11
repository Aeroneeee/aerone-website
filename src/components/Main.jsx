import React from 'react';
import { Flex, useColorMode, IconButton } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import Name from 'components/Name';
import Description from 'components/Description';
import Certification from 'components/Certification';

function Main() {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Flex m='2.5em' flexDirection={'column'} gap={'4em'}>
			<Flex justifyContent='center'>
				<IconButton
					color='primary'
					onClick={toggleColorMode}
					icon={colorMode == 'light' ? <SunIcon /> : <MoonIcon />}
				/>
			</Flex>
			<Name />
			<Description />
			<Certification />
		</Flex>
	);
}

export default Main;
