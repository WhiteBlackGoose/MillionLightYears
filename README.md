# Afterlight
A 3D universe at true scale in the browser, with real special relativity (Three.js + custom GLSL, no image assets). `npm install`, `npm run dev`, press `?` in flight for controls.

Play: https://million-light-years.wbg.gg (deployed from `main` by GitHub Actions)

- `core.js` units, relativity (aberration, Doppler, contraction), logarithmic depth
- `stars.js` infinite procedural stars; `sky.js` galaxy and nebulae ray-marched from your real position
- `system.js` contents of a star system; `bodies.js` stars, gas giants, black holes, pulsars
- `height.js` terrain function (shared with `worker.js`); `terrain.js` LOD ground, atmosphere, clouds, props
- `main.js` flight, landing, walking, weather, interface

Positions are metres (64-bit) relative to the nearest star, and the camera is always at the origin.

Board computer voice: lines generated with [Piper](https://github.com/rhasspy/piper) using the `en_US-ljspeech-high` voice (LJ Speech dataset, public domain), then filtered with ffmpeg. Files in `public/voice/`.
