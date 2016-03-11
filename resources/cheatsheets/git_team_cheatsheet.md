# Git and Team Workflow Cheatsheet

***Git & GitHub Help for WDI in DTLA!***

## TL;DR ToC

- [**Team Workflow**][toc-workflows]
  - [Creating the Repo][toc-create-repo]
  - [Working on Feature Branches][toc-branching]
  - [Writing Code][toc-coding]
  - [Accepting and Merging Work][toc-merging]
- [**Git Command Reference**][toc-commands]
- [**Outside Resources**][toc-resources]

## Team Workflow(s)

Within a collaborative project, while working on your Git Team Workflow,
there are two roles you can fulfill: **programmer** and **manager**.

Any given member of the project may be a programmer or a manager at any
moment! Programmers implement features, while managers integrate the 
work of the members of the team into the application.

#### Creating the Repo

**Manager**:

1. Create a repo locally, using `git init`.
2. Create a remote version of this repo on GitHub (using `hub create` if
   you wish).
3. Ensure you have a remote "link" to the GitHub repo, either by using 
   `git remote add` or `git remote rename`: the remote should be called 
   `upstream`.

**Programmer**:

1. Identify the repo created by your manager on GitHub.
2. Fork the repo to your own account.
3. Use `git clone` to copy **your account's repo** locally. Use the
   SSH URL when cloning if possible, and name the remote `origin`.
   The command should look like `git clone git@github.com:<yourname>/<repo_name>`.
4. Use `git remote add` to add a link to the manager's repo as well! 
   This remote should be called `upstream`, and should be the SSH URL.

When you are complete, your setups should be in the form:

![Diagram showing the local and remote repos.][repo-image]

#### Working on Feature Branches

**Manager** & **Programmer**:

1. Make sure you have created the repo using the 
   [create repo workflow][toc-create-repo].
2. Ensure you are on the `master` branch with `git checkout`. *Only
   pull when you are on `master`.*
3. **Update your local codebase** with `git pull upstream master`. 
   *You should never have a merge conflict.* If you do, **stop**, 
   because something is wrong.
4. **Use a feature branch** with `git checkout <feature_branch_name>`;
   add `-b` to create a new branch if necessary.
5. [Write some code!][toc-coding]
6. **When you have completed a feature, submit your work.**
   - Managers: skip to [accepting and merging work, step #4][toc-merging].
   - Programmers: push the branch to `origin <feature_branch_name>`.
7. On GitHub, [submit a pull request (PR)][pr] from your feature branch,
   where the `base` is the manager's master branch (`upstream/master`) 
   and the `head` is your origin's feature branch.
8. Go back to step #2.

#### Writing Code

**Manager** & **Programmer**:

1. Make changes to your files.
2. Stage a series of changes that go together using `git add`. Try not
   to use `git add -A`: be thoughtful about what you are adding!
3. Take a snapshot of those changes with a meaningful description using
   `git commit`. Make small commits, and often!

#### Accepting and Merging Work

**Manager**:

1. **Find pull request (PR)** submitted on GitHub and check it:
   - if the request is **very** small and simple, you may merge it 
     online;
   - if the request is not well-commented and obvious as to its purpose,
     you should ask for further explanation in the PR;
   - if the request is too large, poorly written or stylistically
     problematic, or how to test it afterwards is unclear, close the PR
     with a clear explanation, asking the programmer to resubmit later;
   - otherwise:
2. Use `git checkout master && git pull upstream master` to ensure your
   local master branch has the most updated version of the codebase.
   If you are working on a feature branch you may need to `git commit` 
   or `git stash` your work.
3. **Follow the *command line instructions* from GitHub's PR Merge page
   or, even better, [from their documentation][local-merge]**:
   - `git fetch origin pull/<pr_id>/head:<feature_branch>` to fetch the
     changes;
   - `git checkout <feature_branch>` to go to the code;
4. Use `git merge master` in the feature branch to merge the current 
   codebase in to it.
5. **Fix any merge conflicts** that arise! Use `git status` liberally to
   identify these. If there were any, be sure to use `git add` and
   `git commit -m "merge"` to commit the fixes.
6. **Test the new feature!** Do not push up the feature if it is not
   working!
   - If the tests fail, close the PR with a clear explanation, asking 
     the programmer to resubmit with fixes.
   - If you are unsure of the outcome of the tests, you should ask for 
     further explanation in the PR before going forward.
7. Accept and share the changes using `git push upstream master` (**the 
   only time you ever push to `upstream/master`**).

![Diagram showing the team workflow.][….png]

---

## Git Command Reference

#### Creating Repos

- **`$ git init`** Initializes a new local repository and begins version
  tracking. Creates a hidden directory that tracks info about the repository,
  including remote repositories.
- **`$ git clone <ssh_or_http_url>`** Clones a remote repository as a new local
  repository with the given connection format (SSH or HTTPS).
- **`$ git remote add <remote_name> <ssh_or_http_url>`** Connects your repo to
  a new remote at the given URL, via the given connection format
  (SSH or HTTPS), and names it with the given name.

#### Working on Repos

##### Branching and Merging

- **`$ git branch <branch_name>`** Creates a new branch with the given name.
- **`$ git checkout <branch_name>`** Moves you to the branch (or commit in
  history) with the given name.
- **`$ git checkout - b <branch_name>`** Creates a new branch and checks it
  out, all in one!
- **`$ git merge <branch_name>`** Merges the branch cwith the given name into
  the current branch.

##### Staging Changes

- **`$ git add <file_name>`** Adds changes made to the given file to 
  the staging area.
- **`$ git add .`** Adds all changes (creating, updating and removing files),
  to files in this directory and sub-directories, to the staging area.
- **`$ git add -A`** Adds all changes (creating, updating and removing files),
  in all files, to the staging area.
- **`$ git add -p`** Adds updates in all staged files to the staging area,
  but runs you through all the changes step by step.

##### Committing Snapshots

- **`$ git commit -m "awesome commit message"`** Saves a snapshot of the
  filesystem including any changes that have been added/staged as a commit.
  It saves the commit with a simple description, or *message*, given after
  `-m`.
- **`$ git commit`** Commits as above, but takes you to a text editor (`nano`)
  to edit the commit's *message*.

##### Exploring Repos

- **`$ git status`** Prints out the current "tracking state" of the repo. The
  state includes information about changes, additions and deletions of
  files, whether or not these changes have been added/stages, and sometimes
  even any merge conflicts.
- **`$ git log`** Prints out the commit history of the current branch of the
  current repo.
- **`$ git branch` & `$ git branch -v`** Prints out a list of all available
  branches in the repo.
- **`$ git remote` & `$ git remote -v`** Prints out a list of all available
  bremotes connected to the repo.
- **`$ git diff <branch_or_commit_name>`** Prints out information about
  *differences*, as insertions (in green) and deletions (in red), between
  the current commit and the given commit (or the most current commit in the
  given branch).

#### Collaborating with Other Repos (Remotes)

- **`$ git push (-u) (<remote_name> <branch_name>)`** Push, or send, commits to
  remote at the given branch. `-u` saves the remote and branch names as
  default for future use.
- **`$ git fetch <remote_name> <branch_name>`** Fetch, or receive, commits from
  a given remote at the given branch. Stores these commits in either the
  named commit, or in a special, new branch.
- **`$ git pull <remote_name> <branch_name>`** Performs a `git fetch` into a new
  branch, then merges it into the current branch and removes the fetched
  branch.

## Resources

- [Slides for the lesson on branching][branching-deck]

Articles and tutorials on branching and workflows in Git:

- [Git Branching][atlassian-branches]
- [Common Git Workflows][atlassian-workflows]
- [Merging vs Rebasing Workflows][atlassian-merge-rebase] ('Conceptual Overiew' section)
- [In-depth Discussion of a Workflow][in-depth-workflow]
- ['Reset Demystified'][git-scm-blog-reset] (helps to understand the structures of Git)
- **[A Git Branching visualization game!][git-viz-game]**

<!-- Links -->

[repo-image]: assets/git-workflow-1.png

[branching-deck]:         https://docs.google.com/presentation/d/1tE0D8F-TNNG36tjCN-H1hzhjAb2rWknGcohEESaPW08/edit#slide=id.p
[atlassian-branches]:     https://www.atlassian.com/git/tutorials/using-branches
[atlassian-workflows]:    https://www.atlassian.com/git/tutorials/comparing-workflows
[atlassian-merge-rebase]: https://www.atlassian.com/git/tutorials/merging-vs-rebasing
[in-depth-workflow]:      http://nvie.com/posts/a-successful-git-branching-model
[git-scm-blog-reset]:     https://git-scm.com/blog/2011/07/11/reset.html
[git-viz-game]:           http://pcottle.github.io/learnGitBranching

[local-merge]: https://help.github.com/articles/checking-out-pull-requests-locally/#modifying-an-inactive-pull-request-locally
[pr]:          https://help.github.com/articles/creating-a-pull-request

[toc-workflows]:   #team-workflows
[toc-create-repo]: #creating-the-repo
[toc-branching]:   #working-on-feature-branches
[toc-coding]:      #writing-code
[toc-merging]:     #accepting-and-merging-work
[toc-commands]:    #git-command-reference
[toc-resources]:   #resources
