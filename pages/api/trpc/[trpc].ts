import * as trpcNext from '@trpc/server/adapters/next';
import { mergeRouters } from '@/lib/trpc-server';
import { userRouter } from '@/lib/routers/test';

const appRouter = mergeRouters(userRouter);
export type AppRouter = typeof appRouter;

// export API handler
// @see https://trpc.io/docs/api-handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
});
