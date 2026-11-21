// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://atgomes.github.io',
	base: '/couch-mode',
	integrations: [
		starlight({
			title: 'Couch Mode',
			description:
				'Turn a Windows PC into a home console: boot to a controller-friendly launcher, stream to your phone or Steam Deck, wake it from the TV.',
			favicon: '/favicon.svg',
			lastUpdated: true,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/atgomes/couch-mode' },
			],
			editLink: {
				baseUrl: 'https://github.com/atgomes/couch-mode/edit/main/',
			},
			customCss: ['./src/styles/custom.css'],
			sidebar: [
				{ label: 'Levels', items: [{ autogenerate: { directory: 'levels' } }] },
				{
					label: 'Extras',
					items: [
						{ slug: 'troubleshooting' },
						{ slug: 'why-this-setup' },
						{ slug: 'changelog' },
					],
				},
			],
		}),
	],
});
