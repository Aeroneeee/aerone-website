import React from 'react';

import { Container, Center, Flex, Box, Heading, Text } from '@chakra-ui/react';

function Home() {
	return (
		<Container>
			<Center>
				<Flex>
					<Box>
						<Text>👋 Hi, I’m</Text>
						<Heading as='h1' size='4xl' noOfLines={2}>
							AERONE PAMINTUAN
						</Heading>
					</Box>
				</Flex>
			</Center>
		</Container>
	);
}

export default Home;
