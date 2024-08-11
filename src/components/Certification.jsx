import React from 'react';
import GCPIcon1 from 'assets/gcp1.svg';
import GCPIcon2 from 'assets/gcp2.svg';
import GCPIcon3 from 'assets/gcp3.svg';
import { Flex, Heading, Text } from '@chakra-ui/react';

function Certification() {
	const certs = [
		{
			icon: GCPIcon1,
			title: 'Professional Cloud Developer',
			date: 'December 2022',
		},
		{
			icon: GCPIcon2,
			title: 'Professional Cloud Architect',
			date: 'August 2022',
		},
		{
			icon: GCPIcon3,
			title: 'Associate Cloud Engineer',
			date: 'September 2021',
		},
	];
	return (
		<Flex align='center' justify='center' gap='2.5em' flexDir={'column'}>
			{certs.map((cert, index) => {
				const direction =
					(index + 1) % 2 === 1 // To make it alternate row and row reverse
						? ['column', 'column', `row`]
						: ['column', 'column', `row-reverse`];

				return (
					<Flex
						key={`cert ${index}`}
						align='center'
						gap='2.5em'
						flexDir={direction}
					>
						<Flex
							align='center'
							key={`icon ${index}`}
							w='16em'
							h='16em'
						>
							<img
								src={cert.icon}
								alt={`GCP Cert Icon ${index}`}
								height='100%'
								width='100%'
							/>
						</Flex>
						<Flex
							alignItems={['center', 'center', 'start']}
							flexDir={'column'}
						>
							<Heading>Google Cloud</Heading>
							<Heading>{cert.title}</Heading>
							<Text>{cert.date}</Text>
						</Flex>
					</Flex>
				);
			})}
		</Flex>
	);
}

export default Certification;
