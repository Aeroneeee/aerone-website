import React, { useState, useEffect } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Routes,
	Navigate,
} from 'react-router-dom';
import { Center, Flex, useColorMode } from '@chakra-ui/react';

import Home from 'components/Home';
import Loader from 'components/Loader';
import Background from 'components/Background';

function App() {
	const [load, upadateLoad] = useState(true);

	const { colorMode } = useColorMode();

	useEffect(() => {
		const timer = setTimeout(() => {
			upadateLoad(false);
		}, 1500);

		return () => clearTimeout(timer);
	}, []);

	return (
		<Router>
			{colorMode == 'dark' && <Background />}
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
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			)}
		</Router>
	);
}

export default App;
