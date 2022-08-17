#! /bin/bash
# echo "git checkout gh-pages"
# git checkout gh-pages
# echo "delete docs folder"
# rm -rf ./docs
# echo "rename folder name from build to docs "
# mv ./build ./docs
# echo "add changed files"
# git add .
# echo "commit changed files"
# git commit -m "feat: update files"
# echo "sleep 10 seconds for git commit "
# sleep 10s
# echo "push changed files"
# git push origin master
# echo "sleep 10 seconds for next edit"
# sleep 10s
# git checkout master


#! /bin/bash
# git add to git push
echo "git add"
git add .
echo "git commit"
git commit -m "feat: update tools"
echo "sleep 5s for commit"
sleep 5s
git push origin master
echo "it's done for git push"