#!/bin/bash

set -x

podman build -t=smc-son--image ./
podman run --volume ./://app:ro --publish 5000:5000 --name=smc-son--container --replace smc-son--image
