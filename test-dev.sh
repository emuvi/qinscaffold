#!/bin/bash
bash -v build.sh
browserify build/index.js --debug -o public/index.js
rm -rf ~/Devs/run/app/qinscaffold
mkdir ~/Devs/run/app/qinscaffold
cd public
cp -r * ~/Devs/run/app/qinscaffold
cd ..
