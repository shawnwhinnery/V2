export interface V2 {
    x: number;
    y: number;
}
export declare type CurveSegment = [start: V2, control: V2, end: V2];
export declare function interpolate(start: number, end: number, progress: number): number;
export declare function radToDeg(rad: number): number;
export declare function degToRad(deg: number): number;
export declare function vecToRad(vector: V2): number;
export declare function radToVec(rad: number): V2;
export declare function normalize(vector: V2): V2;
export declare function random(min?: number, max?: number): V2;
export declare function add(v1: V2, v2: V2): V2;
export declare function subtract(v1: V2, v2: V2): V2;
export declare function multiply(v1: V2, v2: V2): V2;
export declare function distance(v1: V2, v2: V2): number;
export declare function direction(start: V2, end: V2): V2;
export declare function center(vectors: V2[]): V2;
export declare function average(v1: V2, v2: V2): V2;
export declare function lerp(v1: V2, v2: V2, progress: number): V2;
export declare function lerpCurve(curve: CurveSegment, progress: number): V2;
export declare function lerpPath(path: V2[], progress: number): V2;
