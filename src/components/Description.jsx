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
		<Flex align='center' justify='center' gap={8}>
			<Flex flex={1} justify='end'>
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
			<Box flex={1}>
				<Heading>Solving Problems,</Heading>
				<Heading>One line of code at a time</Heading>
				<Text maxWidth='32em'>
					Senior Software Engineer with 4 years of experience in
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
