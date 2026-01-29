import {
	Center,
	Flex,
	Heading,
	Text,
	Stack,
	Image,
	VStack,
	Button,
	useColorMode,
} from '@chakra-ui/react';
import { DownloadIcon } from '@chakra-ui/icons';

import profile from 'assets/profile.png';

function Name() {
	const { colorMode } = useColorMode();

	const handleDownload = async () => {
		try {
			const response = await fetch(
				'https://gapwdboohosipuax.public.blob.vercel-storage.com/Aerone_Pamintuan_Resume_2026-3GxCY6TTB8ZieJ1i1RPDOBvGAt8hGb.pdf'
			);
			const blob = await response.blob();
			const url = window.URL.createObjectURL(blob);
			const link = document.createElement('a');
			link.href = url;
			link.download = 'Aerone_Pamintuan_Resume.pdf';
			document.body.appendChild(link);
			link.click();
			document.body.removeChild(link);
			window.URL.revokeObjectURL(url);
		} catch (error) {
			console.error('Error downloading resume:', error);
		}
	};

	return (
		<Flex
			justify='center'
			direction={['column-reverse', 'column-reverse', 'row']}
			gap={['1em', '1em', '4em']}
		>
			<Stack>
				<Text>👋 Hi, I&apos;m</Text>
				<Center ml={['0em', '0em', '2em']}>
					<VStack spacing='0'>
						<Heading as='h1' size='4xl' textAlign='center'>
							AERONE
						</Heading>
						<Heading as='h1' size='2xl' textAlign='center'>
							PAMINTUAN
						</Heading>
					</VStack>
				</Center>
				<Center mt='1.5em'>
					<Button
						leftIcon={<DownloadIcon />}
						colorScheme='primary'
						variant='solid'
						size='lg'
						px={8}
						py={6}
						fontSize='md'
						fontWeight='semibold'
						borderRadius='lg'
						color={colorMode === 'dark' ? 'white' : 'black'}
						boxShadow={
							colorMode === 'dark'
								? '0 4px 14px 0 rgba(0, 122, 204, 0.39)'
								: '0 4px 14px 0 rgba(0, 122, 204, 0.25)'
						}
						_hover={{
							transform: 'translateY(-2px)',
							boxShadow:
								colorMode === 'dark'
									? '0 6px 20px 0 rgba(0, 122, 204, 0.5)'
									: '0 6px 20px 0 rgba(0, 122, 204, 0.35)',
						}}
						_active={{
							transform: 'translateY(0px)',
						}}
						transition='all 0.2s ease-in-out'
						onClick={handleDownload}
					>
						Download Resume
					</Button>
				</Center>
			</Stack>
			<Center zIndex={1}>
				<Image
					src={profile}
					alt='Aerone Pamintuan'
					boxSize={['300', '300', '400']}
					minWidth={['auto', 'auto', 'fit-content']}
				/>
			</Center>
		</Flex>
	);
}

export default Name;
