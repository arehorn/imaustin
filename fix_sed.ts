import fs from 'fs';

let file = fs.readFileSync('src/pages/index.astro', 'utf8');
file = file.replace('import type { SanityImageSource } from "@sanity/image-url/lib/types/types";', 'import type { SanityImageSource } from "@sanity/image-url/lib/types/types";');
// Fix import
file = file.replace('@sanity/image-url/lib/types/types', '@sanity/image-url');

// Fix contact items mapping
file = file.replace('const contactItems: ContactItem[] = (contactItemsRaw ?? []).map((c: RawPersonalityCard) => ({', 'const contactItems: ContactItem[] = (contactItemsRaw ?? []).map((c: RawContactItem) => ({');

// Fix service columns mapping
file = file.replace('const serviceColumns: ServiceColumn[] = (serviceColumnsRaw ?? []).map((c: RawPersonalityCard) => ({', 'const serviceColumns: ServiceColumn[] = (serviceColumnsRaw ?? []).map((c: RawServiceColumn) => ({');

fs.writeFileSync('src/pages/index.astro', file);
