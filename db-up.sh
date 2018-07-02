#!/bin/bash

docker rm $(docker ps -aq --filter name=prode-db-local-dev)

docker run --name prode-db-local-dev \
            -e POSTGRES_PASSWORD=docker \
            -e POSTGRES_USER=docker \
            -e POSTGRES_DB=prode_db \
            -p 5432:5432 \
            -d postgres:9.5