# mock-rest
Configurable mock-up REST API server for Node.js

## Run
> node index.js

GET (example data)
> http://localhost:9901/example

## Install as windows service
> npm install

> node install.js

## Uninstall windows service
> node uninstall.js

## Configuration
- Create a config file inside /rest folder (see Environment vars below)
- Check for example.json for more details

## Environment vars
- PORT (default 9901)
- FOLDER (default "rest")
