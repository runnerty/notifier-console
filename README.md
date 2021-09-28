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
Through NPM

```bash
npm i @runnerty/notifier-console
```

You can also add modules to your project with [runnerty]

```bash
npx runnerty add @runnerty/notifier-console
```

This command installs the module in your project, adds example configuration in your [config.json] and creates an example plan of use.

If you have installed [runnerty] globally you can include the module with this command:

```bash
runnerty add @runnerty/notifier-console
```
### Configuration sample:
Add in [config.json]:

```json
{
  "notifiers": [
    {
      "id": "console_default",
      "type": "@runnerty-notifier-console"
    }
  ]
}
```

# Usage

Define the type of console message that you need (or prefer) in your process' events

## info mode
![info notification on console](http://i.imgur.com/IKHy3vC.png)

```json
{
  "notifications": {
    "on_end": [
      {
        "id": "console_default",
        "message": "Things done right.",
        "mode": "info"
      }
    ]
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

[Runnerty]: https://www.runnerty.io
[downloads-image]: https://img.shields.io/npm/dm/@runnerty/notifier-console.svg
[npm-url]: https://www.npmjs.com/package/@runnerty/notifier-console
[npm-image]: https://img.shields.io/npm/v/@runnerty/notifier-console.svg
[david-badge]: https://david-dm.org/runnerty/notifier-console.svg
[david-badge-url]: https://david-dm.org/runnerty/notifier-console
[config.json]: http://docs.runnerty.io/config/
[plan.json]: http://docs.runnerty.io/plan/