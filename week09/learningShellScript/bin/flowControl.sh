#!/bin/bash

if [ $(id -u) != "0" ]; then
    echo "You must be the superuser to run this script" >&2
    exit 1
fi

if [ $(id -u) = "0" ]; then
    echo "superuser"
fi

echo "$1"

if [ "$1" = "dev" ]; then
    echo "run ng build for dev..."
fi

echo "hello xinxin"

exit 0
