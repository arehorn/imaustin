declare module 'astro:env/client' {
	export const PUBLIC_SANITY_PROJECT_ID: string | undefined;
	export const PUBLIC_SANITY_DATASET: string;
}declare module 'astro:env/server' {
	export const SANITY_REVALIDATE_SECRET: string | undefined;
	export const RESEND_API_KEY: string | undefined;
}