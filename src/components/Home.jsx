import React from 'react';
import {
	Box,
	Center,
	Flex,
	Heading,
	Text,
	Stack,
	Image,
	VStack,
	useColorMode,
	IconButton,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import profile from 'assets/profile.png';

function Home() {
	const { colorMode, toggleColorMode } = useColorMode();
	// const Icon = (colorMode = 'light' ? SunIcon : MoonIcon);

	return (
		<Box mt={['2em', '8em']} mx={['2em', '8em']}>
			<Flex justifyContent='center' mb='2em'>
				<IconButton
					onClick={toggleColorMode}
					icon={colorMode == 'light' ? <SunIcon /> : <MoonIcon />}
				/>
			</Flex>
			<Flex
				justifyContent='center'
				direction={['column-reverse', 'row']}
				gap={['1em', '4em']}
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
					<Image
						src={profile}
						alt='Aerone Pamintuan'
						boxSize={['200', '400']}
					/>
				</Center>
			</Flex>
			<Flex justifyContent='space-between' w={['15em', '48em']}>
				<Text>test</Text>
				<Box>
					<Heading>Solving Problems,</Heading>
					<Heading>One line of code at a time</Heading>
				</Box>
			</Flex>
		</Box>
	);
}

export default Home;
