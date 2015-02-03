#!/bin/bash

echo “Copying Lightswitch Project www.”;

echo "Deleting files in ./www";
rm -rf ./www/*;

echo "Copying files from ./../dist to ./www";
cp -r ./../dist/* ./www/;