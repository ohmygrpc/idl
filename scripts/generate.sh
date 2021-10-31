#!/bin/bash

IDL_PATH=/go/src/github.com/ohmygrpc/idl
DOCKER_BUF_VERSION=1.0.0

docker run --rm -i \
  --name buf \
  --volume "$(pwd)":$IDL_PATH \
  --workdir $IDL_PATH \
  kanziw/buf:$DOCKER_BUF_VERSION generate
