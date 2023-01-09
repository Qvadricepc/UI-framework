const path = require('path');

module.exports = ({config}) => {
  config.resolve.modules = [
    path.resolve(__dirname, ".."),
    "node_modules",
  ];

  config.resolve.alias = {
    ...config.resolve.alias,
    "@theme": path.resolve(__dirname, "../src/theme"),
    "@common": path.resolve(__dirname, "../src/common"),
    "@components": path.resolve(__dirname, "../src/components"),
    "@features": path.resolve(__dirname, "../src/features"),
  };
  config.resolve.fallback = {
    ...config.resolve.fallback,
    stream: require.resolve('stream-browserify'),
    https: require.resolve('https-browserify'),
    http: require.resolve('stream-http'),
    os: require.resolve('os-browserify/browser'),
    buffer: require.resolve('buffer'),
  };

  /* ADD SVGR SUPPORT */
  // https://stackoverflow.com/a/61706308/2614096
  // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/
  const fileLoaderRule = config.module.rules.find(rule => rule.test && rule.test.test('.svg'));
  fileLoaderRule.exclude = /\.svg$/;

  config.module.rules.push({
    test: /\.svg$/i,
    type: 'asset',
    resourceQuery: /url/, // *.svg?url
  });

  config.module.rules.push({
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
    loader: '@svgr/webpack',
    options: {
      svgo: true,
      svgoConfig: {
        // here are is a list of plugins https://github.com/svg/svgo
        plugins: [
          /*'prefixIds',*/
        ],
      },
    },
  });


  config.module.rules.push({
    test: /icomoon\.svg$/i,
    type: 'asset',
  });

  return config
}
