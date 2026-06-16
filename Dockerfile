FROM node:20
WORKDIR /calculator
COPY calculator.html .
COPY server.js .
EXPOSE 7000
CMD ["node","server.js"]