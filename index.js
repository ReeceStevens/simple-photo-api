var express = require('express')
var path = require('path')
var app = express()

const PHOTO_DIR = process.env.PHOTO_DIR || '/mnt/volume-nyc1-02/sitephotos'

app.get('/photos/featured/:featureNumber', (req, res) => {
    const featureNumber = req.params.featureNumber
    const photoPath = path.resolve(__dirname, PHOTO_DIR + "/featured/" + featureNumber + ".jpg")
    res.sendFile(photoPath)
})

app.get('/photos/:requestedPhoto', (req, res) => {
    const requestedPhoto = req.params.requestedPhoto
    const photoPath = path.resolve(__dirname, PHOTO_DIR + "/photos/" + requestedPhoto)
    console.log("Sending file " + photoPath)
    res.sendFile(photoPath)
})

app.get('/photos', (req, res) => {
    res.sendStatus(404)
})

var port = process.env.PORT || 80
app.listen(port, function() {
    console.log("Listening on port " + port)
})
