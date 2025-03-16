/**
 * Returns the correct path for static assets based on the current environment
 * @param path The path to the asset relative to the public directory
 * @returns The correct path for the current environment
 */
export const getAssetPath = (path: string): string => {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // In development, we use relative paths since assets are served from /public
  // In production, we use absolute paths since assets are served from the base path
  return import.meta.env.DEV ? `./${cleanPath}` : `/coaching-landing-lighthouse/${cleanPath}`;
};
