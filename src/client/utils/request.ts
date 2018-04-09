import rp from 'reqwest';

export const searchVideo = (opts) => rp({
	url: '/api/v1/video/search?keyword=抹布西'
});