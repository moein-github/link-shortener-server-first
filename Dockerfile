FROM node:18.16.0-alpine

WORKDIR /app

COPY package.json .

ARG NODE_ENV
RUN if [ "${NODE_ENV}" = "development" ]; then \
    npm install; \
    else \
    npm install --omit=dev; \
    fi


COPY . .

ENV PORT=3000

EXPOSE $PORT

CMD ["npm", "run", "start:prod"]


# run use this command:
# docker run --name server -d -p 3000:4000 -v $(pwd):/app -v /app/node_modules -e PORT=4000 link-shortener-server
