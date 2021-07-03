module.exports = function(eleventyConfig) {
  // Config API を使って新たなフィルター（次回以降解説予定）を追加する
  eleventyConfig.addFilter( "myFilter", function() {});
  eleventyConfig.addPassthroughCopy("assets");

  // オブジェクトで設定してた値は`return`に指定する（オプション）
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    // templateFormats: ["md", "njk"] // 対象のファイルを限定する
  };
};
