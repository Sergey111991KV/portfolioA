module.exports = {
  "stories": [
    // "../src/**/*.stories.mdx",
    // "../src/**/*.stories.@(js|jsx|ts|tsx)"
    '../src/app/ui-kit/**/*.stories.ts',
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-postcss",
    "@storybook/addon-a11y",
    "storybook-addon-designs"
  ],
  "framework": "@storybook/angular",
  "core": {
    "builder": "@storybook/builder-webpack5"
  }
}
