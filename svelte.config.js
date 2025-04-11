import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		runes: false
	},
	preprocess: [vitePreprocess(), sveltePreprocess()],
	kit: {
		adapter: adapter()
	}
};

export default config;
