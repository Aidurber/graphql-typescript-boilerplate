import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { AuthTokenPayload } from '../resolvers/models/Auth';
const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) {
    return next();
  }
  const token = header.replace('Bearer ', '');
  const verified = jwt.verify(
    token,
    process.env.APP_SECRET
  ) as AuthTokenPayload;
  if (!verified) {
    return next();
  }
  req['userId'] = verified.id;

  return next();
};

export default authMiddleware;
