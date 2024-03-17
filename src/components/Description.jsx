import React from 'react';
import { Box, Flex, Heading, Text } from '@chakra-ui/react';

function Description() {
	return (
		<Flex justifyContent='center' w={['15em', '48em']}>
			<Text>test</Text>
			<Box>
				<Heading>Solving Problems,</Heading>
				<Heading>One line of code at a time</Heading>
				<Text>
					Senior Software Engineer with 3 years of experience in
					JavaScript and SQL. I have a solid track record of
					delivering projects on time and have experience in front-end
					development using React.js, as well as back-end tasks with
					Node.js. I hold Google Cloud certifications, demonstrating
					my commitment to professional growth.
				</Text>
			</Box>
		</Flex>
	);
}

export default Description;
