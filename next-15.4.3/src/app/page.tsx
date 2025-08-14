import { dynamicsWebApi } from "@/lib/dynamics";

export default async function Home() {
  const response = await dynamicsWebApi.callFunction("WhoAmI");
  return <pre>{JSON.stringify(response, null, 2)}</pre>;
}
