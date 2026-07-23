const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginToc = require("eleventy-plugin-toc");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({
    "src/flag_of_barbados.png": "flag_of_barbados.png",
  });

  const md = markdownIt({
    html: true,
    linkify: false,
    typographer: true,
  }).use(markdownItAnchor, {
    permalink: false,
    tabIndex: false,
    slugify: (s) =>
      String(s)
        .trim()
        .toLowerCase()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-"),
  });
  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addPlugin(pluginToc, {
    tags: ["h2"],
    wrapper: false,
    ul: false,
    flat: true,
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "html"],
  };
};
