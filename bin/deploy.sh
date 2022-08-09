#!/usr/bin/env bash

. $HOME/.bashrc
. .env.defaults
. .env.local

args=(-azvP --delete --exclude=node_modules --exclude=.idea --exclude=.git)
hosts=($HOST_DOMAIN) # tornado lightning thunder tundra jefferson
dry=() #add --dry-run to enable testing
user=$HOST_USER
name=$HOST_PATH
project=$HOST_PROJECT

npx next build

for host in "${hosts[@]}"
do
  echo ""
  date
  echo "---------------------"
  echo "syncing ${host}"
  echo "---------------------"
  rsync ${dry[@]} ${args[@]} ./ ${user}@${host}:www/${name}/${project}
  ssh -t ${user}@${host} \$HOME/www/${name}/${project}/bin/post-deploy.sh
done

version=$(jq -r .version package.json)
say "$HOST_PROJECT is live!"
exit
