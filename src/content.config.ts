import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects Collection Schema
 * Architectural projects with localized content
 */
const projects = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './src/content/projects',
    // Generate unique IDs including the language folder to avoid collisions
    generateId: ({ entry, data }) => {
      // entry is like "es/casa-horizonte.md" - use it as the ID
      return entry.replace('.md', '');
    }
  }),
  schema: ({ image }) => z.object({
    // Basic info
    title: z.string(),
    slug: z.string(),
    lang: z.enum(['es', 'en']),
    
    // Project details
    year: z.number().min(1900).max(2100),
    client: z.string(),
    location: z.string(),
    category: z.enum([
      'residencial',
      'comercial', 
      'institucional',
      'urbanismo',
      'interiorismo',
      'consultoria'
    ]),
    
    // Content
    description: z.string(),
    challenge: z.string().optional(),
    solution: z.string().optional(),
    
    // Media
    coverImage: image().optional(),
    images: z.array(z.string()).optional(),
    
    // Meta
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    
    // Metrics (for consultant credibility)
    area: z.string().optional(), // e.g., "2,500 m²"
    duration: z.string().optional(), // e.g., "18 meses"
    budget: z.string().optional(), // e.g., "$2.5M USD"
  }),
});

/**
 * Services Collection Schema
 * Consulting services offered
 */
const services = defineCollection({
  loader: glob({ 
    pattern: '**/*.md', 
    base: './src/content/services',
    generateId: ({ entry }) => entry.replace('.md', '')
  }),
  schema: z.object({
    // Basic info
    title: z.string(),
    slug: z.string(),
    lang: z.enum(['es', 'en']),
    
    // Content
    shortDescription: z.string(),
    fullDescription: z.string().optional(),
    
    // Visual
    icon: z.string(), // Icon name or SVG path
    
    // Features/Benefits
    features: z.array(z.string()).optional(),
    
    // Ordering
    order: z.number().default(0),
    
    // Meta
    draft: z.boolean().default(false),
  }),
});

export const collections = { projects, services };

