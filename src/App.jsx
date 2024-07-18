import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { Center, Flex, useColorMode } from '@chakra-ui/react';

import Main from 'components/Main';
import Loader from 'components/Loader';
import Background from 'components/Background';

function App() {
	const [load, upadateLoad] = useState(true);

	const { colorMode } = useColorMode();

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			{load ? (
				<Flex
					width='100vw'
					height='100vh'
					alignContent='center'
					justifyContent='center'
				>
					<Center>
						<Loader />
					</Center>
				</Flex>
			) : (
				<>
					{colorMode == 'dark' && <Background />}
					<Routes>
						<Route path='/' element={<Main />} />
						<Route path='*' element={<Navigate to='/' />} />
					</Routes>
				</>
			)}
		</Router>
	);
}

export default App;
