import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Proxy to Authorizer Service
app.use('/auth', createProxyMiddleware({
  target: 'http://localhost:4001',  // authorizer service
  changeOrigin: true,
  pathRewrite: {
    '^/auth': '',
  },
}));

// Proxy to Admin Service
app.use('/admin', createProxyMiddleware({
  target: 'http://localhost:4002',  // admin service
  changeOrigin: true,
  pathRewrite: {
    '^/admin': '',
  },
}));

// Proxy to Buyer Service
app.use('/buyer', createProxyMiddleware({
  target: 'http://localhost:4003',  // buyer service
  changeOrigin: true,
  pathRewrite: {
    '^/buyer': '',
  },
}));

app.listen(3000, () => {
  console.log('API Gateway running on http://localhost:3000');
});
