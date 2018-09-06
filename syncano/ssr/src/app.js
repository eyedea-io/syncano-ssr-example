import React from 'react'
import ReactDOMServer from 'react-dom/server'

const ReactApp = require("/app/code/build/static/ssr/main").default;

const path = require("path");
const fs = require("fs");

export default function () {
  const filePath = '/app/code/build/index.html'
  const htmlData = fs.readFileSync(filePath, 'utf8')
  const html = ReactDOMServer.renderToString(<ReactApp />)

  // inject the rendered app into our html and send it
  return htmlData.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  )
}
