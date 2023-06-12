export const SITE = {
  name: 'Iván Salazar',

  origin: 'https://ivansalazar.dev',
  basePathname: '/',
  trailingSlash: false,

  title: 'Iván Salazar 🌮',
  description: 'Personal website and tech blog',

  googleAnalyticsId: 'G-XSS732N7MG', // or "G-XXXXXXXXXX",
  googleSiteVerificationId: '',
}

export const BLOG = {
  disabled: false,
  postsPerPage: 5,

  blog: {
    disabled: false,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: '', // empty for /some-post, value for /pathname/some-post
  },

  category: {
    disabled: false,
    pathname: 'category', // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
}
