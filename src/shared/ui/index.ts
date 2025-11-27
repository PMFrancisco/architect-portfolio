/**
 * Shared UI Components Index
 * Export all reusable components for easy importing
 */

// Note: Astro components should be imported directly from their files
// This file serves as documentation of available components

export const components = {
  // Layout
  Container: './Container.astro',
  Section: './Section.astro',
  Grid: './Grid.astro',
  
  // Typography
  Typography: './Typography.astro',
  
  // Navigation
  Header: './Header.astro',
  Footer: './Footer.astro',
  
  // Interactive
  Button: './Button.astro',
  ThemeToggle: './ThemeToggle.astro',
  LanguagePicker: './LanguagePicker.astro',
  
  // Display
  Card: './Card.astro',
  Icon: './Icon.astro',
} as const;

export type ComponentName = keyof typeof components;


