#!/bin/sh

npm run "lint:js"
RESULT=$?
[ $RESULT -ne 0 ] && exit 1
npm run "lint:css"
RESULT=$?
[ $RESULT -ne 0 ] && exit 1
npm run "test"
RESULT=$?
[ $RESULT -ne 0 ] && exit 1
exit 0