import {
  resisterForEvent
} from "./chunk-MB5WT4SK.mjs";
import {
  errorHandler
} from "./chunk-WAPTIZSS.mjs";
import {
  checkIn
} from "./chunk-2JOCDE3K.mjs";
import {
  createEvent
} from "./chunk-AXRRWN5X.mjs";
import "./chunk-KDMJHR3Z.mjs";
import {
  getAttendeeBadge
} from "./chunk-O5S2O3JD.mjs";
import {
  getEventAttendees
} from "./chunk-SUTKDUUT.mjs";
import {
  getEvent
} from "./chunk-LW7F5U5N.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { fastifyCors } from "@fastify/cors";
import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from "fastify-type-provider-zod";
var app = fastify().withTypeProvider();
var port = process.env.PORT || 3001;
app.register(fastifyCors, {
  origin: "*"
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "event-manager",
      description: "Espeficifa\xE7\xF5es da API para o back-end da aplica\xE7\xE3o event-manager constu\xEDda dureante a NLW Unite da Rocketseat",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
});
app.register(fastifySwaggerUi, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(resisterForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333, host: "0.0.0.0" }).then(() => {
  console.log("Server is running on port 3333");
});
export {
  app
};
