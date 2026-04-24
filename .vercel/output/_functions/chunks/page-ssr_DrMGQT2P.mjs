import { createClient } from '@sanity/client';

const sanityClient = createClient(
            {"apiVersion":"v2023-08-24","projectId":"h0f14hm4","dataset":"production","useCdn":true,"logClientRequests":"dev"}
          );

globalThis.sanityClient = sanityClient;

export { sanityClient as s };
