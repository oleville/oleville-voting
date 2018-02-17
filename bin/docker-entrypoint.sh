#!/bin/sh

set -e

until nc -z db 3306;
do
	echo "Waiting for mysql to come up..."
	sleep .5
done

npm run db:migrate:up

npm run start
