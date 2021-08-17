# DIO JAVA Bootcamp - Github challenge

Bootcamp about Java. Project Challenge about Git/Github

## In this document I am going to share my basic command notes about git and github

### Start a local repository:

git init

### This will save my username and will not ask again when I use pull or push:

git config --global user.name “my username”

### Check the status of the local repository, if there are any changes needed to be commited:

git status

### Stage a specific file:

git add ReadMe.txt

### Stage everything:

git add .

### Do the commit writing the changes in a message:

git commit -m “msg I want to send”

### Push commit to Github. First I need to create the repository on Github's website. Then I copy the url of this repository to tell my machine where to save it remotely. To simplify things, I can add a name to this remote repository on Github to use in the push commands :

git remote add 'name' 'url of my repository on github'

#### To check if it worked fine:

git remote -v

### To send my local repository to the remote one on Github:

git push -u "name chosen above" master

### Merge a branch:

git merge my-slide

### Delete a local branch:

git branch -d my-slide

### Check my commits:

git log

### To have a more complete report of my commits:

git log --graph --color --all –decorate

### To pull a commit made directly on GitHub:

Git pull

### To ignore files on the repository control:

vim .gitignore
click i - to insert. Type .DS_Store
click esc + :wq -write and que-

### To clone repository

git clone "repository url"

### To create a branch

git branch my-slide

### Push branch to repository

git push --set-upstream origin <BRANCH-NAME>
