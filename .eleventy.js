const { execSync } = require("child_process");
const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginToc = require("eleventy-plugin-toc");

function formatMonthYear(iso) {
  const d = new Date(iso);
  return d.toLocaleDateString("en-GB", { month: "long", year: "numeric" });
}

function gitLastUpdated(inputPath) {
  try {
    const iso = execSync(`git log -1 --format=%cs -- "${inputPath}"`, {
      encoding: "utf8",
    }).trim();
    if (iso) return formatMonthYear(iso);
  } catch {}
  return formatMonthYear(new Date().toISOString());
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/styles.css": "styles.css" });
  eleventyConfig.addPassthroughCopy({
    "src/flag_of_barbados.png": "flag_of_barbados.png",
  });

  eleventyConfig.addGlobalData("eleventyComputed", {
    lastUpdated: (data) =>
      data.page && data.page.inputPath
        ? gitLastUpdated(data.page.inputPath)
        : null,
  });

  eleventyConfig.addFilter("pageByPath", function (collection, path) {
    if (!path) return null;
    const suffix = path.startsWith("/") ? path : "/" + path;
    return collection.find((p) => p.inputPath.endsWith(suffix));
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
