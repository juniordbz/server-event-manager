import fastify from "fastify";
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { createEvent } from "./routes/create-event";
import { resisterForEvent } from "./routes/register-for-events";

const app = fastify()

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);


  app.register(createEvent)
  app.register(resisterForEvent)

app.listen({port: 3333}).then(() => {
  console.log("Server is running on port 3333")
})