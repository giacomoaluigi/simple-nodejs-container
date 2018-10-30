FROM mhart/alpine-node:7.10.1

ENV AMBIENTE develop
ENV VERSIONE 0.0.4-unstable

WORKDIR /srv
ADD . .
RUN npm install

EXPOSE 8081
CMD ["node", "server.js"]
