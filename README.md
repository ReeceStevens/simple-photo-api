# Simple Photo API

This is a simple API for providing remotely stored photos. It's not too
complex, and really only has two features:

1. Return a photo when someone requests
   `<api-url>/photos/<photo-file-name>`

2. Return specially marked "featured" photos when someone requests
   `<api-url>/photos/featured/<feature-number>`

The API server is written with `express.js`.
