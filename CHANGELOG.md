

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