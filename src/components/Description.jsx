import React from 'react';
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import JSIcon from 'assets/js.svg';
import ReactIcon from 'assets/react.svg';
import NodeIcon from 'assets/node.svg';
import GCPIcon from 'assets/gcp.svg';

function Description() {
	const icons = [
		{ src: JSIcon, alt: 'JS icon' },
		{ src: ReactIcon, alt: 'React icon' },
		{ src: NodeIcon, alt: 'Node icon' },
		{ src: GCPIcon, alt: 'GCP icon' },
	];
	return (
		<Flex align='center' justify='center' gap={16}>
			<Flex flex={3} justify='end'>
				<Grid templateColumns='repeat(2, 8em)' gap={4}>
					{icons.map(({ src, alt }, index) => (
						<Box key={index} w='8em' h='8em'>
							<img
								src={src}
								alt={alt}
								height='100%'
								width='100%'
							/>
						</Box>
					))}
				</Grid>
			</Flex>
			<Box flex={4}>
				<Heading>Solving Problems,</Heading>
				<Heading>One line of code at a time</Heading>
				<Text maxWidth='32em'>
					Experienced Full-stack Software Engineer with nearly 4 years
					of expertise in React.js and Node.js. Skilled in integrating
					various technologies into web applications, ensuring
					seamless user experiences and optimized performance. Strong
					collaborator with certifications in Google Cloud and a
					commitment to continuous learning.
				</Text>
			</Box>
		</Flex>
	);
}

export default Description;
