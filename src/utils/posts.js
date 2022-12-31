const getNormalizedPost = ({ frontmatter, Content, file }) => {
	const ID = file.split('/').pop().split('.').shift();

	return {
		id: ID,
		publishDate: frontmatter.publishDate,
		draft: frontmatter.draft,
		canonical: frontmatter.canonical,
		slug: frontmatter.slug || ID,
		title: frontmatter.title,
		description: frontmatter.description,
		image: frontmatter.image,
		Content,
		excerpt: frontmatter.excerpt,
		authors: frontmatter.authors,
		category: frontmatter.category,
		tags: frontmatter.tags,
		readingTime: frontmatter.readingTime,
	};
};


const load = async function () {
	const posts = import.meta.glob(['~/../data/blog/**/*.md', '~/../data/blog/**/*.mdx'], {
		eager: true,
	});

	const normalizedPosts = await Promise.all(
		Object.keys(posts).map(async (key) => getNormalizedPost(await posts[key]))
	);

	return normalizedPosts
		.filter((post) => !post.draft)
		.sort((a, b) => new Date(b.publishDate).valueOf() - new Date(a.publishDate).valueOf());
};


let _posts;

export const fetchPosts = () => {
	if (_posts) return Promise.resolve(_posts);

	_posts = load();
	return _posts;
};

/** */
export const findPostsByIds = async (ids) => {
	if (!Array.isArray(ids)) return [];

	const posts = await fetchPosts();
	const postsById = new Map(posts.map(post => [post.id, post]));

	return ids.map(id => postsById.get(id)).filter(Boolean);
};


/** */
export const findLatestPosts = async ({ count = 4 } = {}) => {
	const posts = await fetchPosts();
	return posts ? posts.slice(0, count) : [];
};
