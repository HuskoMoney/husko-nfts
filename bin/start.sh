#!/usr/bin/env bash

#cd "$(dirname "$0")/.."
. $HOME/.bashrc
. "$NVM_DIR/nvm.sh" && nvm use v16
. .env.defaults
. .env.local


PORT=${PORT} npx next start
