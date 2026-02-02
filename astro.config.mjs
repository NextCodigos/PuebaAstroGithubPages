// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://github.com/NextCodigos/PuebaAstroGithubPages",
  base: "/astro_github_pages_ejemplo",
  integrations: [mdx(), sitemap()],
});
