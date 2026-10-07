export function getSiteUrl(): URL | undefined {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const deployment = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  const value = explicit || (deployment ? `https://${deployment}` : undefined);
  if (!value) return undefined;
  const url = new URL(value);
  if (!['https:', 'http:'].includes(url.protocol)) {
    throw new Error('NEXT_PUBLIC_SITE_URL must be an http(s) URL.');
  }
  return new URL(url.origin);
}
