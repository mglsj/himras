// @ts-check
import { defineConfig } from "astro/config";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://himras.in",
	base: "/",
	integrations: [icon()],
});