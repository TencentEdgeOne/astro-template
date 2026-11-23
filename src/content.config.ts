import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const examples = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/examples' }),
});

export const collections = { examples };
