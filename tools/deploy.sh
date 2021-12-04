#!/bin/bash

az deployment group create \
  --name AZFuncLeadsAppDeployment \
  --resource-group iphuphadigital-platform \
  --template-file './tools/arm-template.json' \
  --parameters './tools/arm-parameters.json'