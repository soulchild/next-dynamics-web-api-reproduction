var getApiUrl = (serverUrl, apiConfig) => {
  // Removing this condition fixes the problem
  if (true) {
    let url = "api";
    if (apiConfig.path) {
      url += `/${apiConfig.path}`;
    }
    return new URL(url, serverUrl).toString() + "/";
  }
};

function mergeConfig(internalConfig, config) {
  internalConfig.dataApi.url = getApiUrl(
    config.serverUrl,
    internalConfig.dataApi
  );
  return internalConfig;
}

export default (config) =>
  mergeConfig(
    {
      serverUrl: null,
      dataApi: {
        path: "data",
        url: "",
      },
    },
    config
  );
