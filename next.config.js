const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

const withPWA = require("next-pwa");

module.exports = withBundleAnalyzer(
  withPWA({
    webpack: true,
    webpack: (config) => {
      //Fixes npm packagess thst depends on `fs` module
      config.resolve.fallback = { fs: false };
      return config;
    },
    reactStringMode: true,
    images: {
      domains: [
        "cdn.buymeacoffee.com",
        "res.cloudinary.com",
        "imgur.com",
        "i.imgur.com",
        "cutt.ly",
        "activity-graph.herokuapp.com",
        "i.scdn.co", // images from spotify
        "images.unsplash.com"
      ]
    },

    //Pwa setting
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      disable: process.env.NODE_ENV === "development",
      publicExcludes: ["!resume.pdf"] // don't cache pdf which i wil add later
      
    }
  })
);
