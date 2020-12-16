#!/bin/bash

repo='https://github.com/ejnn/react-app-boilerplate'
repoName='react-app-boilerplate'
ignoreFilesERE='README\.md|initialize\.sh'

git clone $repo $repoName

pushd $repoName
ls | egrep -v $ignoreFilesERE | xargs mv -t ..
popd

rm -rf $OLDPWD
npm install

echo
echo 'initialization complete! (you might want to edit your package.json)'
