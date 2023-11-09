import React from 'react';

import {
	Container,
	Center,
	Flex,
	Box,
	Heading,
	Text,
	Stack,
	Image,
	VStack,
} from '@chakra-ui/react';
import Tilt from 'react-parallax-tilt';

function Home() {
	return (
		<Center mt='8em' mx='16em'>
			<Flex justifyContent='space-between'>
				<Stack>
					<Text>👋 Hi, I’m</Text>
					<Center ml='2em'>
						{/* <Text size='7em'>AERONE</Text> */}
						<VStack spacing='0'>
							<Heading as='h1' size='4xl' textAlign='center'>
								AERONE
							</Heading>
							<Heading
								as='h1'
								size='2xl'
								textAlign='center'
								letterSpacing='2px'
							>
								PAMINTUAN
							</Heading>
						</VStack>
					</Center>
				</Stack>
				<Tilt tiltReverse>
					<Image
						src='/src/assets/profile.png'
						alt='Aerone Pamintuan'
						boxSize='400'
					/>
				</Tilt>
			</Flex>
		</Center>
	);
}

export default Home;
