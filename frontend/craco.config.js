const path = require("path");
const fs = require("fs");

// Check if health check should be enabled
const enableHealthCheck = process.env.ENABLE_HEALTH_CHECK === "true";

let config = {
  enableHealthCheck: false,
};

let healthPluginInstance = null;
let setupHealthEndpoints = null;

if (enableHealthCheck) {
  // Try to load health plugin from .agents/health-plugin
  const healthPluginPath = path.resolve(
    __dirname,
    ".agents/health-plugin/webpack-health-plugin.js"
  );
  if (fs.existsSync(healthPluginPath)) {
    const HealthPlugin = require(healthPluginPath);
    healthPluginInstance = new HealthPlugin();
    setupHealthEndpoints = HealthPlugin.setupHealthEndpoints;
    config.enableHealthCheck = true;
  }
}

// Function to make dev server config compatible with webpack-dev-server v5
const makeDevServerV5Compatible = (devServerConfig) => {
  if (!devServerConfig) return devServerConfig;

  // Handle https property for Webpack Dev Server v5
  if ("https" in devServerConfig) {
    if (devServerConfig.https) {
      devServerConfig.server =
        typeof devServerConfig.https === "object"
          ? { type: "https", options: devServerConfig.https }
          : "https";
    }
    delete devServerConfig.https;
  }

  // Handle disableHostCheck for Webpack Dev Server v5
  if ("disableHostCheck" in devServerConfig) {
    if (devServerConfig.disableHostCheck) {
      devServerConfig.allowedHosts = "all";
    }
    delete devServerConfig.disableHostCheck;
  }

  // Handle clientLogLevel for Webpack Dev Server v5
  if ("clientLogLevel" in devServerConfig) {
    delete devServerConfig.clientLogLevel;
  }

  if (devServerConfig.onBeforeSetupMiddleware) {
    const originalOnBeforeSetup = devServerConfig.onBeforeSetupMiddleware;
    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      originalOnBeforeSetup(devServer);
      if (originalSetupMiddlewares) {
        return originalSetupMiddlewares(middlewares, devServer);
      }
      return middlewares;
    };

    delete devServerConfig.onBeforeSetupMiddleware;
  }

  if (devServerConfig.onAfterSetupMiddleware) {
    const originalOnAfterSetup = devServerConfig.onAfterSetupMiddleware;
    const existingSetupMiddlewares = devServerConfig.setupMiddlewares;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      const updatedMiddlewares = existingSetupMiddlewares
        ? existingSetupMiddlewares(middlewares, devServer)
        : middlewares;
      originalOnAfterSetup(devServer);
      return updatedMiddlewares;
    };

    delete devServerConfig.onAfterSetupMiddleware;
  }

  return devServerConfig;
};

const motiveIconsSrc = path.resolve(__dirname, "../packages/motive-icons/src");

let webpackConfig = {
  eslint: {
    configure: {
      extends: ["plugin:react-hooks/recommended"],
      rules: {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
      },
    },
  },
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "rex-motive": motiveIconsSrc,
    },
    configure: (webpackConfig) => {
      // Allow monorepo package imports outside frontend/src
      if (webpackConfig.resolve && webpackConfig.resolve.plugins) {
        webpackConfig.resolve.plugins = webpackConfig.resolve.plugins.filter(
          (plugin) => plugin.constructor.name !== "ModuleScopePlugin"
        );
      }

      // Allow extensionless imports from ESM packages
      webpackConfig.module.rules.push({
        test: /\.m?js$/,
        resolve: {
          fullySpecified: false,
        },
      });

      // Transpile packages/motive-icons/src using babel-loader
      const oneOfRule = webpackConfig.module && webpackConfig.module.rules
        ? webpackConfig.module.rules.find((r) => r.oneOf)
        : null;

      if (oneOfRule) {
        const babelLoader = oneOfRule.oneOf.find(
          (r) => r.loader && r.loader.includes("babel-loader")
        );
        if (babelLoader) {
          if (Array.isArray(babelLoader.include)) {
            if (!babelLoader.include.includes(motiveIconsSrc)) {
              babelLoader.include.push(motiveIconsSrc);
            }
          } else {
            babelLoader.include = [babelLoader.include, motiveIconsSrc];
          }
        }
      }

      // Add health check plugin to webpack if enabled
      if (config.enableHealthCheck && healthPluginInstance) {
        webpackConfig.plugins.push(healthPluginInstance);
      }
      return webpackConfig;
    },
  },
};

webpackConfig.devServer = (devServerConfig) => {
  if (config.enableHealthCheck && setupHealthEndpoints && healthPluginInstance) {
    const originalSetupMiddlewares = devServerConfig.setupMiddlewares;

    devServerConfig.setupMiddlewares = (middlewares, devServer) => {
      if (originalSetupMiddlewares) {
        middlewares = originalSetupMiddlewares(middlewares, devServer);
      }
      setupHealthEndpoints(devServer, healthPluginInstance);
      return middlewares;
    };
  }

  return devServerConfig;
};

const configureDevServer = webpackConfig.devServer;
webpackConfig.devServer = (devServerConfig) =>
  makeDevServerV5Compatible(configureDevServer(devServerConfig));

module.exports = webpackConfig;
