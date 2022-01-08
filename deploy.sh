#!/usr/bin/env sh

# Make sure the script is thrown
set -e

# Build project
npm run build

# Enter the generated folder
cd build

git init
git add -A
git commit -m 'deploy'

# If released to https: // <username> .github.io / <repo>
#git push -f git@github.com:fingersfun/Learn-Vue-Source-Code.git master:gh-pages

# Use travis Continuous integration
git push -f https://${GITHUB_TOKEN}@github.com/fingersfun/react-antd-admin-starter.git master:gh-pages

cd -