#! /bin/sh

# kill port
fuser -k 3001/tcp
# start app
npm run start
# make the app run in the background
kill -TSTP
bg %1
# see app running
fuser 3001/tcp