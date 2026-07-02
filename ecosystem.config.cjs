/** @type {import('pm2').StartOptions} */
module.exports = {
  apps: [
    {
      name: 'qiexuxing',
      cwd: __dirname,
      script: 'node_modules/next/dist/bin/next',
      args: 'start',
      instances: 1,
      autorestart: true,
      max_memory_restart: '300M',
      env: {
        NODE_ENV: 'production',
        PORT: 3022,
      },
    },
  ],
};
