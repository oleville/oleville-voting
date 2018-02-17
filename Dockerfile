# We'll use Alpine, thanks!
FROM node:9.5-alpine

# Start by installing cipm, which is a pretty slow operation at first
RUN npm i -g cipm

RUN mkdir -p /srv/vote
WORKDIR /srv/vote

# Only add the package.json and package-lock.json files---we can use these
# to detect whether or not the package tree has changed, and if it hasn't,
# we don't need to re-install our dependencies every time.
ADD ["package-lock.json", "package.json", "/srv/vote/"]

# Run cipm because (a) it's prettier and (b) it's faster (not in order of
# importance, obviously)
RUN cipm

# Add the rest of the working tree to /app/ (besides the stuff ignored by
# .dockerignore)
ADD . /srv/vote

ENTRYPOINT bin/docker-entrypoint.sh
