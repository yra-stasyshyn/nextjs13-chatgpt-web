import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';

import { AppRouter } from '../pages/api/trpc/[trpc]';


function getBaseUrlForTrpc() {
  if (typeof window !== 'undefined')
    return '';

  if (process.env.VERCEL_URL)
    return `https://${process.env.VERCEL_URL}`;

  return `http://localhost:${process.env.PORT ?? 3000}`;
}


export const trpc = createTRPCNext<AppRouter>({
  config: ({ ctx }) => ({
    links: [
      httpBatchLink({
        url: `${getBaseUrlForTrpc()}/api/trpc`,
      }),
    ],
  }),
  // @link https://trpc.io/docs/ssr
  ssr: false,
});