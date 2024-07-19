# use an official Node.js runtime as a parent image
FROM node:14

# set the working directory in the container
WORKDIR /usr/src/app

# copy the rest of the application code
COPY . .

# run the command and save the output to a file
CMD ["node", "challenge-c.js"]