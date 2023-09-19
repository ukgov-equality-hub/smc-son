
[SON State of the Nation data explorer](../README.md) >
[Developer documentation](README.md) >
Deployments

# Deployments

We use [GitHub Actions](https://docs.github.com/en/actions) for our deployments.  
Here are the [GitHub Actions pipelines for the SON service](https://github.com/cabinetoffice/smc-son/actions).

## When are deployments run?
* Pushing to the `master` **branch** deploys to the `dev` environment  
  You can see the [dev deployments here](https://github.com/cabinetoffice/smc-son/actions/workflows/build-and-deploy-dev.yml)

* Pushing a **tag** named `v*` deploys to the `production` environment  
  You can see the [production deployments here](https://github.com/cabinetoffice/smc-son/actions/workflows/build-and-deploy-prod.yml)
