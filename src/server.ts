import fastify from "fastify";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";
import { fastifyCors } from "@fastify/cors";

import { ZodTypeProvider, jsonSchemaTransform, serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { createEvent } from "./routes/create-event.js";
import { resisterForEvent } from "./routes/register-for-events.js";
import { getEvent } from "./routes/get-events.js";
import { getAttendeeBadge } from "./routes/get-attendee-badge.js";
import { checkIn } from "./routes/check-in.js";
import { getEventAttendees } from "./routes/get-event-attendees.js";
import { errorHandler } from "./error-handler.js";

export const app = fastify().withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors,{
  origin: '*'
})


  app.register(fastifySwagger, {
    swagger:{
      consumes: ['application/json'],
      produces: ['application/json'],
      info:{
        title: 'event-manager',
        description: 'Espeficifações da API para o back-end da aplicação event-manager constuída dureante a NLW Unite da Rocketseat',
        version: '1.0.0'
      },
    },
    transform: jsonSchemaTransform
  })

  app.register(fastifySwaggerUi, {
    routePrefix: '/docs',
  })

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);


  app.register(createEvent)
  app.register(resisterForEvent)
  app.register(getEvent)
  app.register(getAttendeeBadge)
  app.register(checkIn)
  app.register(getEventAttendees)

  app.setErrorHandler(errorHandler)

app.listen({port: 3333, host: '0.0.0.0'}).then(() => {
  console.log("Server is running on port 3333")
})