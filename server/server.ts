import { Hono, Context } from 'hono';
import { handle } from 'hono/vercel';
import { authController } from './controllers/authController';

const handleServer = (app: Hono) => {
  
  app.route('/auth', authController);

  
  
}

export default handleServer;