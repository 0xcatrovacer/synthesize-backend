## For Developers:

Clone the source locally:

```bash
$ git clone https://github.com/swarnabgarang/synthesize-backend.git
$ cd synthesize-backend
```

Install project dependencies:

```bash
$ npm install
```

Create environment variables:

1. Create directory `config`
1. Enter file `dev.env` inside directory `config`
1. Enter env variables

```
SYNTH_MONGODB_URL="<database url>"
clientID="<client id from Google API>"
clientSecret="<clientSecret from Google API>"
```

Start the app:

```bash
$ npm run start
```

---

## Built with

- [NodeJS](https://nodejs.org/en/ "NodeJS")
- [ExpressJS](https://expressjs.com/ "ExpressJS")

---
