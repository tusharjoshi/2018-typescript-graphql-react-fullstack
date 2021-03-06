const { concurrent, series, } = require('nps-utils') // rimraf, setColors

module.exports = {
  default: series.nps('build.scrub', 'start.dev'),
  dev: concurrent({
    build: {
      script: 'nps build.watch',
      color: 'white.bold',
    },
    server: {
      script: 'sleep 5 && nps server',
      color: 'magenta.bold',
    },
    mongo: {
      script: 'nps mongo.server',
      color: 'red.bold',
    },
    lint: {
      script: 'nps lint.watch',
      color: 'yellow.bold',
    },
  }),
  server: 'nps server',
  production: 'nps server.production',
  mongo: 'nps mongo.server',
}
