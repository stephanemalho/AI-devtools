import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    '/',
    'question/:id',
    '/tags',
    '/tags/:id',
    'profile',
    '/profile/:id',
    '/community',
    '/jobs',
    '/api/webhook',
  ],
  ignoredRoutes: [
    '/api/webhook', '/api/chatgpt',
  ],
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
