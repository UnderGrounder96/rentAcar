#!/bin/sh

export $(cat .env)

echo "Installing Node server deps..."
npm install

echo "Waiting for MySQL to start..."
sh wait-for.sh db:${DB_PORT}

echo "Starting the Node server..."
npm start
