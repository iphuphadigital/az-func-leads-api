#!/bin/bash

apt install zip
zip -r app.zip . --exclude @.funcignore --exclude .funcignore