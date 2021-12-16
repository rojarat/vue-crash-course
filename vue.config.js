module.exports = {
  devServer: {
    proxy: {
      "^/api": {
        target: "http://localhost:5001",
        changeOriginal: true,
        logLevel: "debug",
        pathRewrite: { "^/api": "/" },
      },
    },
  },
};
