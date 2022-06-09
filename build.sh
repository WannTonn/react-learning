#! /bin/bash
echo "git checkout gh-pages"
git checkout gh-pages
echo "delete docs folder"
rm -rf ./docs
echo "rename folder name from build to docs "
mv ./build ./docs
