const load = async () => {
	let images = [];
	try {
		images = import.meta.glob('~/assets/images/**');
	} catch (e) {
		// continue regardless of error
	}
	return images;
};

let _images;

export const fetchLocalImages = () => {
	_images = _images || load();
	return _images;
};

export const findImage = async (imagePath) => {
	if (typeof imagePath !== 'string') return null;
	if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) return imagePath;
	if (!imagePath.startsWith('~/assets')) return null;

	const images = await fetchLocalImages();
	const key = imagePath.replace('~/', '/src/');
	return typeof images[key] === 'function' ? (await images[key]())['default'] : null;
};
