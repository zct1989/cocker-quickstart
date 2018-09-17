const envConfig = __ENV_CONFIG__;

export default {
  env: {
    buildMode: envConfig.BUILD_MODE,
    buildEnv: envConfig.BUILD_ENV,
    buildTime: envConfig.BUILD_TIME,
  },
  server: {
    url: envConfig.URL_SERVER,
    timeout: 30000
  },
  showTabs: true
}