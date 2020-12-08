# Devops CI/CD Pipeline

The devops pipeline consists of two different steps.
1. Build the artifacts
2. Deploy artifacts to test and prod


## Build
A pipeline is setup in Azure devops to build/download and push all proxies to an artifact. This step will always download all proxies and push to artifactory

To add a new proxy please copy the bash task in the pipeline file and update the proxy name. This will download the proxy and put in an artifact

## Release
Each API Proxy has its own release pipeline, this is to ensure that we are able to release each proxy individually.

Create a new release pipeline for each API proxy that should be handled by azure devops, see release pipeline for [Z_RDG_ARENDE_SRV](https://trygghetsradet.visualstudio.com/Trr/_apps/hub/ms.vss-releaseManagement-web.cd-workflow-hub?definitionId=216&_a=environments-editor-preview) as an example. The proxy name should be defined in a variable