import React from 'react';
import {
	Center,
	Flex,
	Heading,
	Text,
	Stack,
	Image,
	VStack,
} from '@chakra-ui/react';

import profile from 'assets/profile.png';

function Name() {
	return (
		<Flex
			justify='center'
			direction={['column-reverse', 'column-reverse', 'row']}
			gap={['1em', '1em', '4em']}
		>
			<Stack>
				<Text>👋 Hi, I’m</Text>
				<Center ml='2em'>
					<VStack spacing='0'>
						<Heading as='h1' size='4xl' textAlign='center'>
							AERONE
						</Heading>
						<Heading
							as='h1'
							size='2xl'
							textAlign='center'
							letterSpacing={['4px', '4px', '2px']}
						>
							PAMINTUAN
						</Heading>
					</VStack>
				</Center>
			</Stack>
			<Center zIndex={1}>
				<Image
					src={profile}
					alt='Aerone Pamintuan'
					boxSize={['300', '300', '400']}
					minWidth='fit-content'
				/>
			</Center>
		</Flex>
	);
}

export default Name;
