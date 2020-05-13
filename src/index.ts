import express from 'express'
import { getFile } from './util'

const app = express()
const port = 3000

app.get('/*', (req, res) => {
    const urlParts = req.url.split('/')
    const fileName = urlParts[urlParts.length - 1]
    console.log(`Serving ${fileName}`)
    const file = getFile(fileName)
    res.send(file)
})

app.listen(port, () => console.log(`File server app listening at http://localhost:${port}`))