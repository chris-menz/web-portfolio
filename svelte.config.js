import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import Icons from "unplugin-icons/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: preprocess(),
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    vite: {
      optimizeDeps: {
        include: ["lodash.get", "lodash.isequal", "lodash.clonedeep"],
      },
      plugins: [
        Icons({
          compiler: "svelte",
        }),
      ],
    },
  },
};

export default config;
