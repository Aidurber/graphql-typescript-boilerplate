import { AuthChecker } from 'type-graphql';
import { Context } from './context';

/**
 * Custom auth checker
 * @param param0 - GraphQL request
 * @param roles - Args to @Authorization(...args:any[])
 */
export const customAuthChecker: AuthChecker<Context> = (
  { root, args, context, info },
  roles
) => {
  // here you can read user from context
  // and check his permission in db against `roles` argument
  // that comes from `@Authorized`, eg. ["ADMIN", "MODERATOR"]
  if (!context.user) return false;

  return true; // or false if access denied
};
