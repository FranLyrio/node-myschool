import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import config from '@shared/config/auth';

export default function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const header = request.headers.authorization;

  if (!header) {
    throw new Error('Usuário não autorizado.');
  }
  
  const [, token] = header.split(' ');

  try {
    const decoded = verify(token, config.jwt.secret);
    
    console.log(decoded);
    return next();
  } catch {
    throw new Error('Usuário não autorizado.')
  }
}