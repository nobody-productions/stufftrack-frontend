FROM node:latest

COPY ./ /home/stufftrack-frontend
WORKDIR /home/stufftrack-frontend
RUN npm install
CMD npm run serve