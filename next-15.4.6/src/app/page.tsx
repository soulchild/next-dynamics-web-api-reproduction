import assert from "node:assert";
import miniDynamics from "../../../mini-dynamics.mjs";

assert(
  miniDynamics({
    serverUrl: "https://test.api.crm4.dynamics.com",
  }).dataApi.url === "https://test.api.crm4.dynamics.com/api/data/"
);

export default async function Home() {}
