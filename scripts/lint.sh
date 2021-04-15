#!/bin/bash

IDL_PATH=/go/src/github.com/taehoio/idl
PROTOBUF_COMMIT_SHA=f9d8238cc442e3e94282f81efbef45bcdde6134b

docker run --rm -i --name protobuf -v "$(pwd)":$IDL_PATH -w $IDL_PATH --entrypoint /bin/sh taehoio/protobuf:$PROTOBUF_COMMIT_SHA -c '\
  buf lint --path services \
'
