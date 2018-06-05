#!/bin/bash

docker rm $(docker ps -aq --filter name=prode-db-local-dev)

docker run --name prode-db-local-dev \
            -e POSTGRES_PASSWORD=Qwerty12 \
            -e POSTGRES_USER=postgres \
            -e POSTGRES_DB=prode-db-local-dev \
            -p 5433:5432 \
            -d postgres:9.5