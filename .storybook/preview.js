/**
 * @Author: frank zhang
 * @Date:   2022-07-31 09:47:37
 * @Last Modified by:   frank zhang
 * @Last Modified time: 2022-07-31 15:25:25
 */
import "../src/index.css";
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: "fullscreen",
};
