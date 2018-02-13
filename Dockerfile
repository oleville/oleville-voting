# We'll use Alpine, thanks!
FROM node:alpine

# Start by installing cipm, which is a pretty slow operation at first
RUN npm i -g cipm

RUN mkdir /app
WORKDIR /app/

# Add the rest of the working tree to /app/ (besides the stuff ignored by
# .dockerignore)
ADD . /app/

ENTRYPOINT npm run start
