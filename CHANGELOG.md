

## [0.14.1](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.14.0...0.14.1) (2023-01-10)

# [0.14.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.13.0...0.14.0) (2022-11-14)


### Bug Fixes

* creating proper types for Notion plugin config ([d079287](https://github.com/attilagyongyosi/the-bad-request-blog/commit/d079287a71863fcbfed96d2e6e092d400904b042))


### Features

* actually committing externalized Gatsby config files ([2d95efd](https://github.com/attilagyongyosi/the-bad-request-blog/commit/2d95efd3d88fdb2ec1720f718cbbeb13b219bc60))
* extracting Gatsby plugin configuration code to config folder ([143c7b7](https://github.com/attilagyongyosi/the-bad-request-blog/commit/143c7b70c39155748249c34c096f6053704beb04))
* initial footer link to RSS feed ([1a04e1a](https://github.com/attilagyongyosi/the-bad-request-blog/commit/1a04e1ac0e9af95ba6736f0222ea46da34db9af1))
* integrating libyear measurement, dependency drift analysis ([4c3e30b](https://github.com/attilagyongyosi/the-bad-request-blog/commit/4c3e30baf18fd96f2ab02aa304d288b674007b3f))

# [0.13.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.12.2...0.13.0) (2022-11-13)


### Features

* integrating gatsby-plugin-feed to generate RSS ([5bc583b](https://github.com/attilagyongyosi/the-bad-request-blog/commit/5bc583b4cc221d30d99dcd857fe5cb45c0de05e1))

## [0.12.2](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.12.1...0.12.2) (2022-11-13)


### Bug Fixes

* assigning ID to package version step to not break later steps ([2948149](https://github.com/attilagyongyosi/the-bad-request-blog/commit/2948149d6c3c2018cb8cb418b0ee8c498f72e3a5))

## [0.12.1](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.12.0...0.12.1) (2022-11-13)


### Bug Fixes

* fixing workflow name in release-dev ([488ede3](https://github.com/attilagyongyosi/the-bad-request-blog/commit/488ede3c93c6e243dff2edcd7c4445ee8e4bc85b))

# [0.12.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.11.2...0.12.0) (2022-11-13)


### Features

* updating workflows, prod deploy now downloads existing artifact too ([6032fc0](https://github.com/attilagyongyosi/the-bad-request-blog/commit/6032fc01a5e7cfe094392c552150b667ada06084))

## [0.11.2](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.11.1...0.11.2) (2022-11-12)


### Bug Fixes

* installing Serverless CLI on deploy workflow ([c5dcd8b](https://github.com/attilagyongyosi/the-bad-request-blog/commit/c5dcd8b55c6b25f9359f800746fad977dbcafcc7))

## [0.11.1](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.11.0...0.11.1) (2022-11-12)


### Bug Fixes

* using a different download GH action that can work between workflows ([ae27e18](https://github.com/attilagyongyosi/the-bad-request-blog/commit/ae27e182f7b3fa73cb7437aa09f253fb6548bf56))

# [0.11.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.10.1...0.11.0) (2022-11-12)


### Features

* sharing build artifact between build and deploy dev workflows ([449fa18](https://github.com/attilagyongyosi/the-bad-request-blog/commit/449fa18496b95b69b56dfe50cd6aa3bf5b28d9fb))

## [0.10.1](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.10.0...0.10.1) (2022-11-12)


### Bug Fixes

* using GH action for dotenv file creation in production workflow too ([50f974e](https://github.com/attilagyongyosi/the-bad-request-blog/commit/50f974ebdf34f09495f12c2e5e6ea2afdb092962))

# [0.10.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.9.1...0.10.0) (2022-11-12)


### Bug Fixes

* fixing dotenv file name in GH workflows, more logging ([c577d0c](https://github.com/attilagyongyosi/the-bad-request-blog/commit/c577d0cceb8bfc9ca4ad479610b7ec732bf13499))
* fixing secret resolution in GitHub workflows ([6f84d4f](https://github.com/attilagyongyosi/the-bad-request-blog/commit/6f84d4fedb8f21d8b7879b1387724466387baea6))
* fixing TypeScript issues in gatsby-config.ts ([82d0897](https://github.com/attilagyongyosi/the-bad-request-blog/commit/82d089750bc3603c49ed46c5f842d204bd0ae9bb))
* locally generating .env file from GH secrets ([442c701](https://github.com/attilagyongyosi/the-bad-request-blog/commit/442c7013712ba1d07c7d96e6bf031e549807a7bb))
* removing LayoutComponent from IndexPage as it will be wrapped programatically ([738981b](https://github.com/attilagyongyosi/the-bad-request-blog/commit/738981b8ddb3b20c1166cd1b653b2f0250db9eeb))
* using a precooked GH action to create .env file ([b09860c](https://github.com/attilagyongyosi/the-bad-request-blog/commit/b09860c3f58626923bc29037d221395825ee753b))


### Features

* adding proper 404 page ([f1daa7b](https://github.com/attilagyongyosi/the-bad-request-blog/commit/f1daa7b763621b5fa7fa7b3964ef9990a294716f))
* clicking on Header navigates to root ([cc47ff9](https://github.com/attilagyongyosi/the-bad-request-blog/commit/cc47ff986b1633b69570baf86884125ea52a84bf))
* initial integration with Notion ([b748478](https://github.com/attilagyongyosi/the-bad-request-blog/commit/b748478ab0a6d2927a62998cf4609f61b4572e0d))
* slugifying blog post titles for proper URLs ([a1d92f9](https://github.com/attilagyongyosi/the-bad-request-blog/commit/a1d92f93ba26db097d1bd554e34f26bba445798c))

## [0.9.1](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.9.0...0.9.1) (2022-11-11)


### Bug Fixes

* adding padding to main area ([dbabca0](https://github.com/attilagyongyosi/the-bad-request-blog/commit/dbabca0470f233a95507895f00a4c1a6d6004da8))

# [0.9.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.8.1...0.9.0) (2022-11-11)


### Bug Fixes

* only trigger deployment to dev when build was successful ([cba87d3](https://github.com/attilagyongyosi/the-bad-request-blog/commit/cba87d32e88b9a2105f056221cf45140c02fac15))


### Features

* designing and styling footer ([a697a5c](https://github.com/attilagyongyosi/the-bad-request-blog/commit/a697a5cdf216dd31794c639d98d30682bcf708a8))
* designing and styling header ([b5d4f98](https://github.com/attilagyongyosi/the-bad-request-blog/commit/b5d4f9845e4871981a0644282da6a41cd055ef3c))
* implementing a maintenance page ([5c4a770](https://github.com/attilagyongyosi/the-bad-request-blog/commit/5c4a7704ebcaaae66dc5fd365dc8990aee699197))
* importing Source Sans Pro from Google Fonts ([4f076ac](https://github.com/attilagyongyosi/the-bad-request-blog/commit/4f076ac26f06628a896920569afac4b47ff94d87))
* initial global layout styles for all pages ([c4a3c79](https://github.com/attilagyongyosi/the-bad-request-blog/commit/c4a3c7933b57687ddfe00cf9236169d505f6f944))
* integrating SCSS ([e0683c5](https://github.com/attilagyongyosi/the-bad-request-blog/commit/e0683c588d98c55de87c88b781a804d9a3c5cbbd))
* introducing global style, integrating CSS reset ([ff4e697](https://github.com/attilagyongyosi/the-bad-request-blog/commit/ff4e697c3918aff498153a206756f8432973150a))
* introducing theme.scss where colors live ([8567476](https://github.com/attilagyongyosi/the-bad-request-blog/commit/85674762f35f4e5934edcd6001e2d91a0963667c))
* separating header into its own element ([8c73909](https://github.com/attilagyongyosi/the-bad-request-blog/commit/8c739096cac91edd2e0f4a1464e7b88b92bd0e41))
* updating workflows to run on Node.js 18 ([c422c44](https://github.com/attilagyongyosi/the-bad-request-blog/commit/c422c448ad4b02ded701c5d590719a3dd9efbcfe))

## [0.8.1](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.8.0...0.8.1) (2022-11-09)


### Bug Fixes

* fixing wrong dev version number by refactoring workflows, separating to build and dev deploy ([edbe3dd](https://github.com/attilagyongyosi/the-bad-request-blog/commit/edbe3dd7a55c969a0d56dfa943f8860dc53c5ab6))

# [0.8.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.7.2...0.8.0) (2022-11-09)


### Features

* introducing a LayoutComponent, extracting Footer ([d58a0a0](https://github.com/attilagyongyosi/the-bad-request-blog/commit/d58a0a044c511eafffe8e067d7765f7614043000))

## [0.7.2](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.7.1...0.7.2) (2022-11-08)


### Bug Fixes

* unifying production deployment workflow ([4c9001f](https://github.com/attilagyongyosi/the-bad-request-blog/commit/4c9001f567381cacce4c1739d30bf567b2af3c96))

## [0.7.1](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.7.0...0.7.1) (2022-11-08)

# [0.7.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.6.0...0.7.0) (2022-11-08)


### Features

* adding GitHub workflow that deploys to production ([2f5cb53](https://github.com/attilagyongyosi/the-bad-request-blog/commit/2f5cb5324846e6bc9bcee66d9103b913dfc56268))
* updating Serverless config, adding ability to deploy production ([aabfaef](https://github.com/attilagyongyosi/the-bad-request-blog/commit/aabfaefd8a512fa5ed3b33c0f42a64187a7825e7))
* using npm ci instead of npm install for GitHub workflows ([a282ace](https://github.com/attilagyongyosi/the-bad-request-blog/commit/a282aceb7c274390fea02b19c98a86ee34446e52))

# [0.6.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.5.0...0.6.0) (2022-11-08)


### Features

* updating Serverless configuration, including new domain ([15010b6](https://github.com/attilagyongyosi/the-bad-request-blog/commit/15010b6b697b36ee5f8caa618c05fbb3b82490e6))

# [0.5.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.4.0...0.5.0) (2022-11-08)


### Bug Fixes

* moving testing phase before production build in CI config ([e68ac26](https://github.com/attilagyongyosi/the-bad-request-blog/commit/e68ac26cc3145e997b9a665dd5a848533f4cdc14))


### Features

* integrating Serverless deployment to CI pipeline ([5f6e65d](https://github.com/attilagyongyosi/the-bad-request-blog/commit/5f6e65d1a2c5c4a417de988214405a9e430b8840))

# [0.4.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.3.0...0.4.0) (2022-11-08)


### Bug Fixes

* fixing import-gpg GH Action parameters for v5 ([67217e9](https://github.com/attilagyongyosi/the-bad-request-blog/commit/67217e958f9839e80050e1127cc9a66752a591ed))
* removing tagArgs from release-it config as GH action is set to sign tags by default ([26aaf0f](https://github.com/attilagyongyosi/the-bad-request-blog/commit/26aaf0f7ee05d843947b9a13359e5d96215c0061))


### Features

* attempt to sign CI commits and tags ([62fe798](https://github.com/attilagyongyosi/the-bad-request-blog/commit/62fe79892810bea85e934558fa031b680d9d18c2))

# [0.3.0](https://github.com/attilagyongyosi/the-bad-request-blog/compare/0.2.0...0.3.0) (2022-11-07)


### Features

* integrating release-it in GitHub Action ([b048edf](https://github.com/attilagyongyosi/the-bad-request-blog/commit/b048edfb43c999296077a76640d8a5c09358a587))

# 0.2.0 (2022-11-07)


### Bug Fixes

* moving back version query to component to comply with Gatsby ([1359b3c](https://github.com/attilagyongyosi/the-bad-request-blog/commit/1359b3c3effd42ae4e3e094eab463ba7fcb332bf))
* upgrading GitHub actions to the latest version, including testing in CI ([0d394cc](https://github.com/attilagyongyosi/the-bad-request-blog/commit/0d394cc49e069733e49e59dfd870b4e57db72f8d))


### Features

* displaying version number in footer ([ff3b88d](https://github.com/attilagyongyosi/the-bad-request-blog/commit/ff3b88d7b28e8ea5ab92cefc18bd188fef222046))
* integrate ESLint ([5156053](https://github.com/attilagyongyosi/the-bad-request-blog/commit/5156053c44bea812505ac1e6e197093328d854f2))
* integrating path-linter ([31bc345](https://github.com/attilagyongyosi/the-bad-request-blog/commit/31bc3456b48248fa71ed59433ee2ec3013dda654))
* integrating release-it ([d2b8b87](https://github.com/attilagyongyosi/the-bad-request-blog/commit/d2b8b874f76b76ee868085bb257d85246ae3c5ff))