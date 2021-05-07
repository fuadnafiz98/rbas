import fastify from "fastify";

import config from "./config";

const app = fastify({ logger: true });

app.get("/", async (_, response) => {
  return response.send({
    health: "ok",
  });
});

const server = async (PORT: number) => {
  try {
    await app.listen(PORT);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

server(config.PORT);
