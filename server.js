import express from 'express'
import path from 'path'
import history from 'connect-history-api-fallback'
const app = express()

app.use('/static', express.static(path.join(`${__dirname}/dist/static`)))
// app.use(history({
//   index: path.join(`${__dirname}/dist/index.html`)
// }))

app.get('/', function (req, res) {
  res.sendFile(path.join(`${__dirname}/dist/index.html`))
})

app.set('port', (process.env.PORT || 3000))

app.listen(app.get('port'), function () {
  console.log(`Node app is running on http://localhost:${app.get('port')}`)
})
