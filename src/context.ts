import { User } from './entities/User';

/**
 * GraphQL server context type
 */
export interface Context {
  user?: User;
}
