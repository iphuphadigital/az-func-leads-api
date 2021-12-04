# az-func-leads-api

An API for managing business leads with Zoho's CRM, built using Azure Functions.

## Deployment

The Function App and its resources in Azure can be created or updated using a single command. This command expects the Azure CLI to already be installed and authenticated. If you have multiple subscriptions, you might have to also set the default to the correct subscription.

Optional, to set subscription:

```
az account set --subscription [Name or ID of subscription]
```

To deploy:

```
npm run deploy:resources
```

View the `arm-parameters.json`, `arm-template.json`, and `deploy.sh` files to make changes.
