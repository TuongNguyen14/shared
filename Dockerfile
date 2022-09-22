FROM node:16-alpine as base-stage
## install typescript globaly
RUN npm install -g typescript

## important when we create local node modules in the container with npm install
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

## set the working directory of the application to /home/node/app
WORKDIR /home/node/app

COPY --chown=node:node tsconfig.json ./
COPY --chown=node:node package*.json ./

## ensure the application files are owned by the non-root node user
## switch the user to node before running npm install
USER node

###########################################################################
## Build / Dev Stage
## builder image for building and transpile babel code
FROM base-stage as builder

RUN npm ci

COPY . .

# ## docker-compose will override this command for development
# ## for development only 
CMD [ "npm", "run", "prepublish"]