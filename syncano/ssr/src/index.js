process.env.NODE_ENV='production'

const babelRegister = require('babel-register')({
  ignore: [/(node_modules)/],
  presets: ['es2015', 'react-app']
})

import Syncano from '@syncano/core'

import { lstatSync, readdirSync } from 'fs'
import part from 'path'

const App = require('./app')

export default (ctx) => {
  const {response} = new Syncano(ctx)

  response(App.default(), 200, 'text/html')
}
