module.exports = {
    apps : [
      {
        name: 'infia2023',
        exec_mode: 'cluster',
        script: './node_modules/nuxt/bin/nuxt.js',
        args: 'start'
      }
    ],
    deploy : {
      // "production" is the environment name
      production : {
        user: 'root',
        host: '172.104.165.46',
        ref: 'origin/master',
        repo: 'git@github.com:ivriets/infia-nuxt-2023.git',
        ssh_options: ['ForwardAgent=yes'],
        path: '/var/www/infiacorp.com',
        'post-deploy' : 'yarn && yarn build && pm2 startOrRestart ecosystem.config.js --env production'
      }
    }
  }