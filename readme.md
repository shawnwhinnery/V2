# V2

A minmial tool set for 2D vector arithmetic for Node and the browser.

## Setup

---

In your console.

```js
npm i V2
```

In your source code.

```js
import { radToDeg } from "v2"

radToDeg(1) // 57.29578
```

## Usage

---

```js
radToDeg(1) // 57.29578

degToRad(57.29578) // 1

vecToRad({ x: 0, y: 0 }) // 0

vecToRad(0) // { x: 0, y: 0 }

normalize({ x: 10, y: 5 }) // { x: 1, y: 0.5 }

random()

add()

subtract()

multiply()

distance()

direction()

average()

center()

lerp()

lerpCurveSegment()

lerpCurve()
```
