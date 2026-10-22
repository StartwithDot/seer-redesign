#!/bin/sh
cd "$(dirname "$0")"
/Users/leo/Documents/POIDH/node_modules/.bin/esbuild bird.js --bundle --format=iife --minify --loader:.svg=text --outfile=../dist/bird.js --log-level=warning
