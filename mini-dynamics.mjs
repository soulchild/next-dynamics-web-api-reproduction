var _config = new WeakMap();

var getApiUrl = (serverUrl, apiConfig) => {
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
}

export class DynamicsWebApi {
  constructor(config) {
    _config.set(this, {
      serverUrl: null,
      dataApi: {
        path: "data",
        url: "",
      },
    });
    mergeConfig(_config.get(this), config);
    return _config.get(this);
  }
}
