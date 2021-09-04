// const PI = Math.PI
const { PI, atan2, cos, sin, random, sqrt, abs } = Math

export interface V2 {
	x: number
	y: number
}

export type Curve = [start: V2, control: V2, end: V2]

export function interpolate(start: number, end: number, progress: number) {
	return start + (end - start) * progress
}

export function radToDeg(rad: number): number {
	return (rad * 180) / PI
}

export function degToRad(deg: number): number {
	return (deg * PI) / 180
}

export function vecToRad(vector: V2): number {
	return atan2(vector.y, vector.x)
}

export function radToVec(rad: number): V2 {
	return { x: cos(rad), y: sin(rad) }
}

export function normalize(vector: V2): V2 {
	var length = sqrt(vector.x * vector.x + vector.y * vector.y)
	return { x: vector.x / length, y: vector.y / length }
}

export function rand(min: number = 0, max: number = 1): V2 {
	return {
		x: random() * (max - min + 1) + min,
		y: random() * (max - min + 1) + min
	}
}

export function add(v1: V2, v2: V2): V2 {
	return {
		x: v1.x + v2.x,
		y: v1.y + v2.y
	}
}

export function subtract(v1: V2, v2: V2): V2 {
	return {
		x: v1.x - v2.x,
		y: v1.y - v2.y
	}
}

export function multiply(v1: V2, v2: V2): V2 {
	return {
		x: v1.x * v2.x,
		y: v1.y * v2.y
	}
}

export function distance(v1: V2, v2: V2): number {
	var d = {
		x: abs(v1.x - v2.x),
		y: abs(v1.y - v2.y)
	}
	return sqrt(d.x * d.x + d.y * d.y)
}

export function direction(start: V2, end: V2): V2 {
	var vector = subtract(end, start)
	return normalize(vector)
}

export function center(vectors: V2[]): V2 {
	var total = { x: 0, y: 0 },
		l = vectors.length
	while (l--) {
		let v = vectors[l]
		total.x += v.x
		total.y += v.y
	}
	total.x = total.x / vectors.length
	total.y = total.y / vectors.length
	return total
}

export function average(v1: V2, v2: V2): V2 {
	return {
		x: (v1.x + v2.x) / 2,
		y: (v1.y + v2.y) / 2
	}
}

export function lerp(v1: V2, v2: V2, progress: number): V2 {
	return {
		x: interpolate(v1.x, v2.x, progress),
		y: interpolate(v1.y, v2.y, progress)
	}
}

export function lerpCurve(curve: Curve, progress: number): V2 {
	var a = lerp(curve[0], curve[1], progress),
		b = lerp(curve[1], curve[2], progress)
	return lerp(a, b, progress)
}

export function lerpPath(path: V2[], progress: number): V2 {
	var segments = Math.floor(path.length / 2),
		segment = Math.floor(segments * progress),
		stepSize = 1 / segments,
		relativeProgress = (progress / stepSize) % 1,
		start = segment * 2,
		a = path[start],
		b = path[start + 1],
		c = path[start + 2],
		curve: Curve = [a, b, c]
	return lerpCurve(curve, relativeProgress)
}
