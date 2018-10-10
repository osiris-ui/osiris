# Osiris UI Contributing Guide

In order to maintain the lib organized, please follow this steps before send any pull requests.

1) Create an issue or grab an issue before send your PR's (for beginners see [good first issues](https://github.com/osiris-ui/osiris/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22)).
2) Fork the repository to your Github's account.
3) Go to the repository folder and run `npm install`.
4) If your change's *doens't* envolve any css files, follow this commands: 
  - Run these commands
   ```sh
      git submodule update --init --recursive
    ```
5) If your change *envolves* any css file, please follow this commands
  - Fork the [osiris-style](https://github.com/osiris-ui/osiris-style) repo.
  - In the `osiris` repo, run these commands
    ```sh
      git submodule update --init --recursive
    ```
  - Go to `src/osiris-style`
  - Run `git remote rename origin upstream`
  - Run `git remote add origin YOUR-FORK-GIT-LINK`
  - Run `npm install`
  - Run `npm run dev`
  - Modify the sass files (they will be compiled in real time)
  - Push the modifications to your fork (git push origin master) and open a PR
6) Run the project with `npm run dev`, the storybook will be available at `http://localhost:9001`
7) If you need to change any doc file and want to preview, you need `docsify` installed
```

If you have any question please, [open a issue](https://github.com/osiris-ui/osiris/issues)!
