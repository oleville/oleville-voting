# We'll use Alpine, thanks!
FROM node:alpine

# Add the rest of the working tree to /app/ (besides the stuff ignored by
# .dockerignore)
ADD . /app/

ENTRYPOINT npm run start
