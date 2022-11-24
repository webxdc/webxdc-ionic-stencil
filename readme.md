# Webxdc starter chat example with Ionic Framework and Stencil

<img src="screenshot.png" height="360px"/>

## limitations:

- use `src` attribute instead of name for icons, because using the `name` attribute would include all icons in the build
   - (and we manually exlude them from the xdc because of that right now in `./create-webxdc.sh`)

- dedicated webxdc-dev tool does not work in github codespaces, because it relies on multiple ports

- sometimes build gets broken if you run `npm start` and `npm run build` simultaneously. `rm -r www` and do a clean build helps in this case. 

## run with the simple simulator:

```bash
npm start
```

## run with webxdc dev tool:
```
// TODO
```

## To build the webxdc for production, run:

```bash
npm run build
```

## To run the unit tests once, run:

```
npm test
```

## To run the unit tests and watch for file changes during development, run:

```
npm run test.watch
```


> Hint: If you just want to quickly try it out you could use github codespaces.
