import fastify from "fastify";

import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUi from "@fastify/swagger-ui";

import { jsonSchemaTransform, serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';
import { createEvent } from "./routes/create-event";
import { resisterForEvent } from "./routes/register-for-events";
import { getEvent } from "./routes/get-events";
import { getAttendeeBadge } from "./routes/get-attendee-badge";
import { checkIn } from "./routes/check-in";
import { getEventAttendees } from "./routes/get-event-attendees";

const app = fastify()

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

app.listen({port: 3333}).then(() => {
  console.log("Server is running on port 3333")
})