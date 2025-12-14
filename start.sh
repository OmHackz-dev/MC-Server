#!/usr/bin/env bash

echo "Starting Paper server..."

java -Xms14G -Xmx14G -jar paper.jar --nogui
java -Xms12G -Xmx12G -jar paper.jar --nogui
java -Xms8G -Xmx8G -jar paper.jar --nogui
java -Xms6G -Xmx6G -jar paper.jar --nogui