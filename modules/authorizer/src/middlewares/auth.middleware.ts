import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../utils/token.util';
import { UserModel } from 'common';
import { JwtPayload } from 'jsonwebtoken';

interface AuthenticatedRequest extends Request {
  user?: Partial<UserModel>;
}

export const protect = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  try {
    const decoded = verifyToken(token) as JwtPayload;
    req.user = {
      id: decoded.id,
      email: decoded.email,
      accountType: decoded.accountType
    } as Partial<UserModel>;
    next();
  } catch {
    res.status(403).json({ error: 'Invalid or expired token' });
  }
};
