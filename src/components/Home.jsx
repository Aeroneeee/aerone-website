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
import Tilt from 'react-parallax-tilt';

import profile from 'assets/profile.png';

function Home() {
	return (
		<Center mt='8em' mx={['4em', '16em']}>
			<Flex
				justifyContent='space-between'
				direction={['column-reverse', 'row']}
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
								letterSpacing={['4px', '2px']}
							>
								PAMINTUAN
							</Heading>
						</VStack>
					</Center>
				</Stack>
				<Center>
					<Tilt tiltReverse gyroscope>
						<Image
							src={profile}
							alt='Aerone Pamintuan'
							boxSize={['200', '400']}
						/>
					</Tilt>
				</Center>
			</Flex>
		</Center>
	);
}

export default Home;
