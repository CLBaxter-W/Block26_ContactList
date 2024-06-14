# Block26_ContactList

Unit 3 Block 26 Contact List

-- Created local git repository, with skeleton project

- in terminal or project top
  $ git init
  $ git add .
  $ git commit -m "Great initial message"

-- created empty cloud repository, with skeleton README.md

- in cloud repository
  create w/name and readme
  copy from the "code" button -> ssh for clone (i.e git@github.com:CLBaxter-W/Block26_ContactList.git)

- in terminal window cd to the head of local project directory structure
  $ git remote set-url origin <remote_repo_URL>
  $ git push -u origin --all

-- To note may need to reset local to match anything in the cloud repository already
$ git pull --rebase origin main

\*\*\* reference: https://stackoverflow.com/questions/11188801/connect-a-local-repository-with-a-remote-repository

/****************************************\*\*****************************************/

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
