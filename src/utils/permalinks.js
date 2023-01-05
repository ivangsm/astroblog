import slugify from 'slugify';

import { SITE, BLOG } from '~/config.mjs';

const trimSlash = (str) => str.trim().replace(/^(\/+|\/+$)/g, '');

const basePathname = trimSlash(SITE.basePathname);

const createPath = (...params) => {
	const paths = params.filter(Boolean).join('/');
	return `/${paths}${SITE.trailingSlash && paths ? '/' : ''}`;
};

export const cleanSlug = (text) => slugify(trimSlash(text), { lower: true });

export const BLOG_BASE = cleanSlug(BLOG?.blog?.pathname);
export const POST_BASE = cleanSlug(BLOG?.post?.pathname);
export const CATEGORY_BASE = cleanSlug(BLOG?.category?.pathname);
export const TAG_BASE = cleanSlug(BLOG?.tag?.pathname);


export const getCanonical = (path = '') => new URL(path, SITE.origin);


export const getPermalink = (slug = '', type = 'page') => {
	const _slug = cleanSlug(slug);

	switch (type) {
		case 'category':
			return createPath(basePathname, CATEGORY_BASE, _slug);

		case 'tag':
			return createPath(basePathname, TAG_BASE, _slug);

		case 'post':
			return createPath(basePathname, POST_BASE, _slug);

		case 'page':
		default:
			return createPath(basePathname, _slug);
	}
};


export const getHomePermalink = () => {
	const permalink = getPermalink();
	return permalink !== '/' ? permalink + '/' : permalink;
};


export const getRelativeLink = (link = "") => {
	return createPath(basePathname, trimSlash(link));
};


/** */
export const getBlogPermalink = () => getPermalink(BLOG_BASE);