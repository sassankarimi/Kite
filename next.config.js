const withSass = require('@zeit/next-sass');
const withCss = require('@zeit/next-css');
const withFonts = require('next-fonts');
const withImages = require('next-images');
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([[withCss],[withSass],[withFonts],[withImages]],{ hmr: false },
    {
        exportPathMap: function() {
            return {
              '/': { page: '/' },
              '/tour': { page: '/tour/:num/:name' },
            };
          }
    }
          
    );
