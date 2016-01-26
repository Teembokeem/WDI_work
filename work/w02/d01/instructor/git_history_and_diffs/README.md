# Git

There are a few important links that will help you get started (and will
continue to stay relevant as you get better) with Git:

- **Pro Git**
  - the [homepage](https://progit.org)
  - the [online docs](https://git-scm.com)
- [Getting Started](https://git-scm.com/doc)
  - [Basic Cheatsheet](https://training.github.com/kit/downloads/github-git-cheat-sheet.pdf)
  - ["Visual" Interacive Cheatsheet](http://ndpsoftware.com/git-cheatsheet.html)
- [Try Git](https://try.github.io)

---

### Creating and managing a repo

#### Lesson Objectives

- Use `git-init` to create a new repo.
- Describe what happens when you "initialize" a new Git repository.
- Use `man git` and `git --help` to remind you of usage and Git's 
  "subcommands."
- Find and explain the purpose of the `.gitignore`, `.gitignore_global`,
  and `.gitconfig` files.
- Use `hub-create` and `hub-browse` to add or open GitHub pages for a Git repo.

[**Git Basics – Creating a Git Repository**][git-init]

Create a repo, or "initialize" it. Then use the GitHub CLI tool `hub` to clone
it to GitHub and browse it there. Practice using Git configurations and
`.gitignore` to control the way the `git` command works, and the built in and
online help to explore how to use the command.

---

### Checking the status of a repo

#### Lesson Objectives

- Explain what is meant by Git either tracking a file or not, and what is
  meant by a change being added or not.
- Track a file in Git using `git add`, and stop tracking it by using
  `git rm` or `git rm --cached`.

[**Git Basics – Recording Changes to the Repository**][git-status]

Use `git status` or `git s` to explore your repos state. Check whether files
are *ignored*, *tracked*, *changed* or *committed*. Track or stop tracking,
ignore or stop ignoring certain files.

![The possible states for files in a repo.][git-status-diagram]

---

### Checking the history of the repo

#### Lesson Objectives

- Use `git log` to visualize the history of Git commits.
- Create a new Git subcommand or otherwise edit the `.gitconfig`.
- Explain what is meant by `HEAD` in Git.
- Identify a commit based on its "SHA hash."
- Use `git diff` to visualize the difference or "diff" between two Git commits.
- Use GitHub to find the log of commits for a repo.
- Use GitHub to identify the "diffs" between commits, and explain their 
  meaning.

Check the history of your repo, and identify the specific parts. Compare
moments in time to one another. Check this on GitHub as well, and figure out
how to leverage the CLI and GitHub to simplify the process.

---

### Exploring and visiting the history of the repo

#### Lesson Objectives

- Use `git-checkout` to visit a specific Git commit.
- Use `git-reset` to reset the state of your repo to a specific Git commit.
- Use standard Git diagrams/visualizations to describe your repo's history
  and state.

Checkout and reset to different moments in history. Begin using an
[explanation](https://git-scm.com/blog/2011/07/11/reset.html) of `git-reset`
to help understand how Git works.

<!-- LINKS -->

[git-init]:           https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
[git-status]:         https://git-scm.com/book/en/v2/Git-Basics-Recording-Changes-to-the-Repository
[git-status-diagram]: https://git-scm.com/book/en/v2/book/02-git-basics/images/lifecycle.png
