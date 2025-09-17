var __privateGet = (obj, member) => member.get(obj);
var __privateAdd = (obj, member, value) => member.set(obj, value);
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
    __privateAdd(this, _config, {
      serverUrl: null,
      dataApi: {
        path: "data",
        url: "",
      },
    });
    mergeConfig(__privateGet(this, _config), config);
    return __privateGet(this, _config);
  }
}
