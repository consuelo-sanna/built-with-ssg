module.exports = function (config) {
  config.addPassthroughCopy("src/js"); // everything inside this folder will be passed to the build

  return {
    dir: {
      input: "src",
      output: "dist",
      data: "_data",
    },
  };
};
