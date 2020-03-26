const routes = require('next-routes')

module.exports = routes()                           
.add('/:noname/:lang(en|es)/:wow+', 'complex')