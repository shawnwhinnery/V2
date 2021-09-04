var assert = require("assert"),
	{
		radToDeg,
		degToRad,
		vecToRad,
		radToVec,
		normalize,
		random,
		add,
		subtract,
		multiply,
		distance,
		direction,
		average,
		center,
		lerp,
		lerpCurve,
		lerpCurve
	} = require("./../V2.js")

const DEGREES_IN_ONE_RADIAN = 57.29577951308232

describe("V2", function () {
	it("Should convert radins to degrees", function () {
		assert.equal(radToDeg(1), DEGREES_IN_ONE_RADIAN)
	})

	it("Should convert degrees to radins", function () {
		assert.equal(degToRad(DEGREES_IN_ONE_RADIAN), 1)
	})

	it("Should convert a vector to radins", function () {
		assert.equal(vecToRad({ x: 2, y: 0 }), 0)
		assert.equal(
			vecToRad({ x: 0.7071067811865476, y: 0.7071067811865475 }),
			0.7853981633974483
		)
		assert.equal(vecToRad({ x: 2, y: 1 }), 0.4636476090008061)
	})

	it("Should convert a radians to vector", function () {
		var v = radToVec(0.7853981633974483),
			expecc = { x: 0.7071067811865476, y: 0.7071067811865475 }
		assert.deepEqual(v, expecc)
		// assert.equal(v.x, expecc.x)
		// assert.equal(v.y, expecc.y)
	})

	it("Should normalize a vector", function () {
		var v = normalize({ x: 0, y: 2 }),
			expecc = { x: 0, y: 1 }
		assert.deepEqual(v, expecc)
	})

	it("Should generate a random vector with minimum and maximum values", function () {
		var min = 69,
			max = 420,
			vectors = [
				random(min, max),
				random(min, max),
				random(min, max),
				random(min, max),
				random(min, max),
				random(min, max),
				random(min, max),
				random(min, max),
				random(min, max),
				random(min, max)
			].forEach(({ x, y }) => {
				assert.equal(x >= min, true)
				assert.equal(y >= min, true)

				assert.equal(x <= max, true)
				assert.equal(y <= max, true)
			})
	})

	it("Should add 2 vectors", function () {
		var a = { x: 1, y: 1 },
			b = { x: 1, y: 1 },
			expecc = { x: 2, y: 2 }
		assert.deepEqual(add(a, b), expecc)
	})

	it("Should subtract 2 vectors", function () {
		var a = { x: 10, y: 10 },
			b = { x: 5, y: 5 },
			expecc = { x: 5, y: 5 }
		assert.deepEqual(subtract(a, b), expecc)
	})

	it("Should average 2 vectors", function () {
		var a = { x: 10, y: 10 },
			b = { x: 6, y: 6 },
			expecc = { x: 8, y: 8 }
		assert.deepEqual(average(a, b), expecc)
	})

	it("Should multiply 2 vectors", function () {
		var a = { x: 10, y: 10 },
			b = { x: 6, y: 6 },
			expecc = { x: 60, y: 60 }
		assert.deepEqual(multiply(a, b), expecc)
	})

	it("return the distance between two vectors", function () {
		var a = { x: 0, y: 10 },
			b = { x: 0, y: 0 },
			expecc = 10
		assert.deepEqual(distance(a, b), expecc)
	})

	it("return a heading vector from a to b", function () {
		var a = { x: 0, y: 1 },
			b = { x: 0, y: 0 },
			expecc = { x: 0, y: -1 }
		assert.deepEqual(direction(a, b), expecc)
	})

	it("should linerarly interpolate between 2 vectors", function () {
		var a = { x: 1, y: 1 },
			b = { x: 0, y: 0 },
			expecc = { x: 0.5, y: 0.5 }
		assert.deepEqual(lerp(a, b, 0.5), expecc)
	})

	it("Should find the centerpoint of N vectors", function () {
		assert.deepEqual(
			center([
				{ x: 0, y: 10 },
				{ x: 0, y: -10 },
				{ x: 10, y: 0 },
				{ x: -10, y: 0 }
			]),
			{ x: 0, y: 0 }
		)
	})

	it("Should lineraly interpolate along a bezier curve", function () {
		assert.deepEqual(
			lerpCurve(
				[
					{ x: 0, y: 0 },
					{ x: 50, y: 50 },
					{ x: 100, y: 0 }
				],
				0.1
			),
			{ x: 10, y: 9 }
		)
		assert.deepEqual(
			lerpCurve(
				[
					{ x: 0, y: 0 },
					{ x: 50, y: 50 },
					{ x: 100, y: 0 }
				],
				0.5
			),
			{ x: 50, y: 25 }
		)
		assert.deepEqual(
			lerpCurve(
				[
					{ x: 0, y: 0 },
					{ x: 50, y: 50 },
					{ x: 100, y: 0 }
				],
				0.9
			),
			{ x: 90, y: 9 }
		)
	})
})
