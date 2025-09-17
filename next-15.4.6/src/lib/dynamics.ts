import assert from "node:assert";
import { DynamicsWebApi } from "../../../mini-dynamics.mjs";

assert(
  new DynamicsWebApi({
    serverUrl: "https://test.api.crm4.dynamics.com",
  }).dataApi.url === "https://test.api.crm4.dynamics.com/api/data/"
);
