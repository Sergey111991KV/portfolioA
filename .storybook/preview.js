import { setCompodocJson } from "@storybook/addon-docs/angular";
import docJson from "../documentation.json";
import { componentWrapperDecorator } from '@storybook/angular';
setCompodocJson(docJson);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
}


export const decorators = [
  componentWrapperDecorator((story) => `<div style="margin: 3em">
<!--    <button style="margin-bottom: 3em">Future change style</button>-->
    ${story}
</div>`),
];
// <script src="script.js"></script>
