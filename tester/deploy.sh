#!/usr/bin/env bash

# abort on errors
set -e

# build
bun run build

# navigate into the build output directory
cd ../docs

# place .nojekyll to bypass Jekyll processing
echo > .nojekyll

# dirty hack to get rid of 404s for router pages
pages=("load" "explore" "test" "edit" "about")
for page in "${pages[@]}"
do
  mkdir $page
  ln -s ../index.html "./$page/index.html"
done

# if you are deploying to a custom domain
# echo 'www.example.com' > CNAME

git checkout -B main
git add -A

# if you are deploying to https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git main

# if you are deploying to https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git main:gh-pages

cd -
