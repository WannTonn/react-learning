#! /bin/bash
echo "git checkout gh-pages"
git checkout gh-pages
echo "delete docs folder"
rm -rf ./docs
echo "rename folder name from build to docs "
mv ./build ./docs
echo "add changed files"
git add .
echo "commit changed files"
git commit -m "feat: update files"
echo "push changed files"
git push origin master