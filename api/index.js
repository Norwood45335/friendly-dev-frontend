import { createRequestHandler } from "react-router";
import { createRequestListener } from "@mjackson/node-fetch-server";

// Create a Fetch-style handler from the React Router server build
const fetchHandler = createRequestHandler(
  () => import("../build/server/index.js"),
  process.env.NODE_ENV || "production"
);

// Export a Node.js request listener for Vercel's Node runtime
export default createRequestListener(async (request) => {
  return fetchHandler(request);
});
