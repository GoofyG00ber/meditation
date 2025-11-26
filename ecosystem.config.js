# PM2 Ecosystem Configuration
module.exports = {
  apps: [{
    name: 'meditation-api',
    script: 'server.cjs',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    }
  }]
};
