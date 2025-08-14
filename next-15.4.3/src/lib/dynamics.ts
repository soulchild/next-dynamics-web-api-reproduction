import { DynamicsWebApi } from "dynamics-web-api";

export const dynamicsWebApi = new DynamicsWebApi({
  serverUrl: "https://test.api.crm4.dynamics.com",
  dataApi: {
    version: "9.1",
  },
  onTokenRefresh: async () => "fakeToken",
});
