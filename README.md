<p align="center">
  <a href="http://runnerty.io">
    <img height="257" src="https://runnerty.io/assets/header/logo-stroked.png">
  </a>
  <p align="center">Smart Processes Management</p>
</p>

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Dependency Status][david-badge]][david-badge-url]
<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg">
</a>


A simple console notifier for [Runnerty]

### Installation:
```bash
npm i @runnerty/notifier-console
```

### Configuration sample:
Add in [config.json]:

```json
{
  "id": "console_default",
  "type": "@runnerty-notifier-console"
}
```


# Usage

Define the type of console message that you need (or prefer) in your process' events

## info mode
![info notification on console](http://i.imgur.com/IKHy3vC.png)

```json
{
  "id": "console_default",
  "message": "Things done right.",
  "mode": "info"
}
```


## warn mode
![warning notification on console](http://i.imgur.com/TdMmGQz.png)

```json
{
  "id": "console_default",
  "message": "We are out of candy!",
  "mode": "warn"
}
```


## error mode
![error notification on console](http://i.imgur.com/s2D0DxD.png)

```json
{
  "id": "console_default",
  "message": "Oh no.",
  "mode": "error"
}
```

[Runnerty]: https://www.npmjs.com/package/runnerty
