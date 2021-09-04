"use strict";
exports.__esModule = true;
exports.lerpPath = exports.lerpCurve = exports.lerp = exports.average = exports.center = exports.direction = exports.distance = exports.multiply = exports.subtract = exports.add = exports.random = exports.normalize = exports.radToVec = exports.vecToRad = exports.degToRad = exports.radToDeg = exports.interpolate = void 0;
var PI = Math.PI;
// not vector specific but necessary and potentially useful so ima just export it
function interpolate(start, end, progress) {
    return start + (end - start) * progress;
}
exports.interpolate = interpolate;
function radToDeg(rad) {
    return (rad * 180) / PI;
}
exports.radToDeg = radToDeg;
function degToRad(deg) {
    return (deg * PI) / 180;
}
exports.degToRad = degToRad;
function vecToRad(vector) {
    return Math.atan2(vector.y, vector.x);
}
exports.vecToRad = vecToRad;
function radToVec(rad) {
    return { x: Math.cos(rad), y: Math.sin(rad) };
}
exports.radToVec = radToVec;
function normalize(vector) {
    var length = Math.sqrt(vector.x * vector.x + vector.y * vector.y);
    return { x: vector.x / length, y: vector.y / length };
}
exports.normalize = normalize;
function random(min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 1; }
    return {
        x: Math.random() * (max - min + 1) + min,
        y: Math.random() * (max - min + 1) + min
    };
}
exports.random = random;
function add(v1, v2) {
    return {
        x: v1.x + v2.x,
        y: v1.y + v2.y
    };
}
exports.add = add;
function subtract(v1, v2) {
    return {
        x: v1.x - v2.x,
        y: v1.y - v2.y
    };
}
exports.subtract = subtract;
function multiply(v1, v2) {
    return {
        x: v1.x * v2.x,
        y: v1.y * v2.y
    };
}
exports.multiply = multiply;
function distance(v1, v2) {
    var d = {
        x: Math.abs(v1.x - v2.x),
        y: Math.abs(v1.y - v2.y)
    };
    return Math.sqrt(d.x * d.x + d.y * d.y);
}
exports.distance = distance;
function direction(start, end) {
    var vector = subtract(end, start);
    return normalize(vector);
}
exports.direction = direction;
function center(vectors) {
    var total = { x: 0, y: 0 }, l = vectors.length;
    while (l--) {
        var v = vectors[l];
        total.x += v.x;
        total.y += v.y;
    }
    total.x = total.x / vectors.length;
    total.y = total.y / vectors.length;
    return total;
}
exports.center = center;
function average(v1, v2) {
    return {
        x: (v1.x + v2.x) / 2,
        y: (v1.y + v2.y) / 2
    };
}
exports.average = average;
function lerp(v1, v2, progress) {
    return {
        x: interpolate(v1.x, v2.x, progress),
        y: interpolate(v1.y, v2.y, progress)
    };
}
exports.lerp = lerp;
function lerpCurve(curve, progress) {
    var a = lerp(curve[0], curve[1], progress), b = lerp(curve[1], curve[2], progress);
    return lerp(a, b, progress);
}
exports.lerpCurve = lerpCurve;
function lerpPath(path, progress) {
    var segments = Math.floor(path.length / 2), segment = Math.floor(segments * progress), stepSize = 1 / segments, relativeProgress = (progress / stepSize) % 1, start = segment * 2, a = path[start], b = path[start + 1], c = path[start + 2], curve = [a, b, c];
    return lerpCurve(curve, relativeProgress);
}
exports.lerpPath = lerpPath;
