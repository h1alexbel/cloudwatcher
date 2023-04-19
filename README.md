[![Managed By Self XDSD](https://self-xdsd.com/b/mbself.svg)](https://self-xdsd.com/p/eo-cqrs/eo-kafka?provider=github)

[![DevOps By Rultor.com](https://www.rultor.com/b/eo-cars/eo-kafka)](https://www.rultor.com/p/eo-cqrs/eo-kafka)
[![We recommend IntelliJ IDEA](https://www.elegantobjects.org/intellij-idea.svg)](https://www.jetbrains.com/idea/)
<br>

[![node](https://github.com/h1alexbel/cloudwatcher/actions/workflows/node.yml/badge.svg)](https://github.com/h1alexbel/cloudwatcher/actions/workflows/node.yml)
[![codecov](https://codecov.io/gh/h1alexbel/cloudwatcher/branch/master/graph/badge.svg?token=pR10NCn613)](https://codecov.io/gh/h1alexbel/cloudwatcher)

[![Hits-of-Code](https://hitsofcode.com/github/h1alexbel/cloudwatcher)](https://hitsofcode.com/view/github/h1alexbel/cloudwatcher)
[![Lines-of-Code](https://tokei.rs/b1/github/h1alexbel/cloudwatcher)](https://github.com/h1alexbel/cloudwatcher)
[![PDD status](http://www.0pdd.com/svg?name=h1alexbel/cloudwatcher)](http://www.0pdd.com/p?name=h1alexbel/cloudwatcher)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/h1alexbel/cloudwatcher/blob/master/LICENSE)

Project architect: [@h1alexbel](https://github.com/h1alexbel)

Cloudwatcher is a robot that watches for your Public Cloud Services and reports about its health.

**Motivation**. We are not happy with manual status-checking and monitoring of Instances, Clusters, etc.
<br>
Cloudwatcher is a chatbot that do it for you.

## How to Contribute

Fork repository, make changes, send us a [pull request](https://www.yegor256.com/2014/04/15/github-guidelines.html).
We will review your changes and apply them to the `master` branch shortly,
provided they don't violate our quality standards. To avoid frustration,
before sending us your pull request please run full NPM build:

```bash
$ npm run ci
```

You will need NPM 9+ and Node.js 18.16.0+.

Our [rultor image](https://github.com/yegor256/rultor-image) for CI/CD.
