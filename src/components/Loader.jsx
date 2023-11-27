import { useLottie } from 'lottie-react';
import loaderAnimation from 'lotties/loader.json';

const style = {
	height: 200,
};

const Loader = () => {
	const options = {
		animationData: loaderAnimation,
		loop: true,
		autoplay: true,
	};

	const { View, setSpeed } = useLottie(options, style);

	// setSpeed(2);

	return View;
};

export default Loader;
