import { DynamicsWebApi } from "dynamics-web-api";
import { ConfidentialClientApplication } from "@azure/msal-node";

const client = new ConfidentialClientApplication({
  auth: {
    authority: `https://login.microsoftonline.com/${process.env.TENANT_ID}`,
    clientId: process.env.CLIENT_ID ?? "",
    clientSecret: process.env.CLIENT_SECRET,
  },
});

export const dynamicsWebApi = new DynamicsWebApi({
  serverUrl: process.env.SERVER_URL,
  dataApi: {
    version: "9.1",
  },
  onTokenRefresh: () =>
    client.acquireTokenByClientCredential({
      scopes: [process.env.SCOPES ?? ""],
    }),
});
