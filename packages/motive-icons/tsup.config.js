import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.js"],
  format: ["esm", "cjs"],
  outDir: "dist",
  clean: true,
  splitting: false,
  sourcemap: false,
  minify: false,
  target: "es2019",
  external: ["react", "react-dom", "react/jsx-runtime", "framer-motion"],
  esbuildOptions(options) {
    options.jsx = "automatic";
    options.loader = { ...(options.loader || {}), ".js": "jsx", ".jsx": "jsx" };
  },
  dts: false,
});
