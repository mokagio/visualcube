"use strict";
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y;
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeMasking = void 0;
var constants_1 = require("./constants");
var maskingFunctions = (_a = {},
    _a[constants_1.Masking.FL] = (_b = {},
        _b[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _b[constants_1.Face.D] = function (row, col, cubeSize) { return true; },
        _b[constants_1.Face.R] = function (row, col, cubeSize) { return row == cubeSize - 1; },
        _b[constants_1.Face.L] = function (row, col, cubeSize) { return row == cubeSize - 1; },
        _b[constants_1.Face.F] = function (row, col, cubeSize) { return row == cubeSize - 1; },
        _b[constants_1.Face.B] = function (row, col, cubeSize) { return row == cubeSize - 1; },
        _b),
    _a[constants_1.Masking.F2L] = (_c = {},
        _c[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _c[constants_1.Face.D] = function (row, col, cubeSize) { return true; },
        _c[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0; },
        _c[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0; },
        _c[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0; },
        _c[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0; },
        _c),
    _a[constants_1.Masking.LL] = (_d = {},
        _d[constants_1.Face.U] = function (row, col, cubeSize) { return true; },
        _d[constants_1.Face.D] = function (row, col, cubeSize) { return false; },
        _d[constants_1.Face.R] = function (row, col, cubeSize) { return row == 0; },
        _d[constants_1.Face.L] = function (row, col, cubeSize) { return row == 0; },
        _d[constants_1.Face.F] = function (row, col, cubeSize) { return row == 0; },
        _d[constants_1.Face.B] = function (row, col, cubeSize) { return row == 0; },
        _d),
    _a[constants_1.Masking.CLL] = (_e = {},
        _e[constants_1.Face.U] = function (row, col, cubeSize) {
            return (row > 0 && col > 0 && row < cubeSize - 1 && col < cubeSize - 1) || // is center
                ((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
        },
        _e[constants_1.Face.D] = function (row, col, cubeSize) { return false; },
        _e[constants_1.Face.R] = function (row, col, cubeSize) { return row == 0 && (col == 0 || col == cubeSize - 1); },
        _e[constants_1.Face.L] = function (row, col, cubeSize) { return row == 0 && (col == 0 || col == cubeSize - 1); },
        _e[constants_1.Face.F] = function (row, col, cubeSize) { return row == 0 && (col == 0 || col == cubeSize - 1); },
        _e[constants_1.Face.B] = function (row, col, cubeSize) { return row == 0 && (col == 0 || col == cubeSize - 1); },
        _e),
    _a[constants_1.Masking.ELL] = (_f = {},
        _f[constants_1.Face.U] = function (row, col, cubeSize) { return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1)); },
        _f[constants_1.Face.D] = function (row, col, cubeSize) { return false; },
        _f[constants_1.Face.R] = function (row, col, cubeSize) { return row == 0 && col > 0 && col < cubeSize - 1; },
        _f[constants_1.Face.L] = function (row, col, cubeSize) { return row == 0 && col > 0 && col < cubeSize - 1; },
        _f[constants_1.Face.F] = function (row, col, cubeSize) { return row == 0 && col > 0 && col < cubeSize - 1; },
        _f[constants_1.Face.B] = function (row, col, cubeSize) { return row == 0 && col > 0 && col < cubeSize - 1; },
        _f),
    _a[constants_1.Masking.OLL] = (_g = {},
        _g[constants_1.Face.U] = function (row, col, cubeSize) { return true; },
        _g[constants_1.Face.D] = function (row, col, cubeSize) { return false; },
        _g[constants_1.Face.R] = function (row, col, cubeSize) { return false; },
        _g[constants_1.Face.L] = function (row, col, cubeSize) { return false; },
        _g[constants_1.Face.F] = function (row, col, cubeSize) { return false; },
        _g[constants_1.Face.B] = function (row, col, cubeSize) { return false; },
        _g),
    _a[constants_1.Masking.OCLL] = (_h = {},
        _h[constants_1.Face.U] = function (row, col, cubeSize) {
            return (row > 0 && col > 0 && row < cubeSize - 1 && col < cubeSize - 1) || // is center
                ((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
        },
        _h[constants_1.Face.D] = function (row, col, cubeSize) { return false; },
        _h[constants_1.Face.R] = function (row, col, cubeSize) { return false; },
        _h[constants_1.Face.L] = function (row, col, cubeSize) { return false; },
        _h[constants_1.Face.F] = function (row, col, cubeSize) { return false; },
        _h[constants_1.Face.B] = function (row, col, cubeSize) { return false; },
        _h),
    _a[constants_1.Masking.OELL] = (_j = {},
        _j[constants_1.Face.U] = function (row, col, cubeSize) { return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1)); },
        _j[constants_1.Face.D] = function (row, col, cubeSize) { return false; },
        _j[constants_1.Face.R] = function (row, col, cubeSize) { return false; },
        _j[constants_1.Face.L] = function (row, col, cubeSize) { return false; },
        _j[constants_1.Face.F] = function (row, col, cubeSize) { return false; },
        _j[constants_1.Face.B] = function (row, col, cubeSize) { return false; },
        _j),
    _a[constants_1.Masking.COLL] = (_k = {},
        _k[constants_1.Face.U] = function (row, col, cubeSize) { return true; },
        _k[constants_1.Face.D] = function (row, col, cubeSize) { return false; },
        _k[constants_1.Face.R] = function (row, col, cubeSize) { return row == 0 && (col == 0 || col == cubeSize - 1); },
        _k[constants_1.Face.L] = function (row, col, cubeSize) { return row == 0 && (col == 0 || col == cubeSize - 1); },
        _k[constants_1.Face.F] = function (row, col, cubeSize) { return row == 0 && (col == 0 || col == cubeSize - 1); },
        _k[constants_1.Face.B] = function (row, col, cubeSize) { return row == 0 && (col == 0 || col == cubeSize - 1); },
        _k),
    _a[constants_1.Masking.OCELL] = (_l = {},
        _l[constants_1.Face.U] = function (row, col, cubeSize) { return true; },
        _l[constants_1.Face.D] = function (row, col, cubeSize) { return false; },
        _l[constants_1.Face.R] = function (row, col, cubeSize) { return row == 0 && col > 0 && col < cubeSize - 1; },
        _l[constants_1.Face.L] = function (row, col, cubeSize) { return row == 0 && col > 0 && col < cubeSize - 1; },
        _l[constants_1.Face.F] = function (row, col, cubeSize) { return row == 0 && col > 0 && col < cubeSize - 1; },
        _l[constants_1.Face.B] = function (row, col, cubeSize) { return row == 0 && col > 0 && col < cubeSize - 1; },
        _l),
    _a[constants_1.Masking.WV] = (_m = {},
        _m[constants_1.Face.U] = function (row, col, cubeSize) { return true; },
        _m[constants_1.Face.D] = function (row, col, cubeSize) { return true; },
        _m[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0; },
        _m[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0; },
        _m[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0; },
        _m[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0; },
        _m),
    _a[constants_1.Masking.VH] = (_o = {},
        _o[constants_1.Face.U] = function (row, col, cubeSize) { return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1)); },
        _o[constants_1.Face.D] = function (row, col, cubeSize) { return true; },
        _o[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0; },
        _o[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0; },
        _o[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0; },
        _o[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0; },
        _o),
    _a[constants_1.Masking.ELS] = (_p = {},
        _p[constants_1.Face.U] = function (row, col, cubeSize) { return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1)); },
        _p[constants_1.Face.D] = function (row, col, cubeSize) { return (row == 0 ? col < cubeSize - 1 : true); },
        _p[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0 && (row == cubeSize - 1 ? col > 0 : true); },
        _p[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0; },
        _p[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0 && (row == cubeSize - 1 ? col < cubeSize - 1 : true); },
        _p[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0; },
        _p),
    _a[constants_1.Masking.CLS] = (_q = {},
        _q[constants_1.Face.U] = function (row, col, cubeSize) { return true; },
        _q[constants_1.Face.D] = function (row, col, cubeSize) { return true; },
        _q[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0; },
        _q[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0; },
        _q[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0; },
        _q[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0; },
        _q),
    _a[constants_1.Masking.CMLL] = (_r = {},
        _r[constants_1.Face.U] = function (row, col, cubeSize) { return (row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1); },
        _r[constants_1.Face.D] = function (row, col, cubeSize) { return true; },
        _r[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0 || col == 0 || col == cubeSize - 1; },
        _r[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0 || col == 0 || col == cubeSize - 1; },
        _r[constants_1.Face.F] = function (row, col, cubeSize) { return col == 0 || col == cubeSize - 1; },
        _r[constants_1.Face.B] = function (row, col, cubeSize) { return col == 0 || col == cubeSize - 1; },
        _r),
    _a[constants_1.Masking.CROSS] = (_s = {},
        _s[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _s[constants_1.Face.D] = function (row, col, cubeSize) { return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1)); },
        _s[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _s[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _s[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _s[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _s),
    _a[constants_1.Masking.F2L3] = (_t = {},
        _t[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _t[constants_1.Face.D] = function (row, col, cubeSize) {
            return (row == 0 && col == cubeSize - 1) || !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1));
        },
        _t[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0 && col < cubeSize - 1; },
        _t[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _t[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0 && col > 0; },
        _t[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _t),
    _a[constants_1.Masking.F2L2] = (_u = {},
        _u[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _u[constants_1.Face.D] = function (row, col, cubeSize) { return row > 0 || (col > 0 && col < cubeSize - 1); },
        _u[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0 && col > 0; },
        _u[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0 && col < cubeSize - 1; },
        _u[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _u[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0; },
        _u),
    _a[constants_1.Masking.F2LSM] = (_v = {},
        _v[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _v[constants_1.Face.D] = function (row, col, cubeSize) {
            return !((row == 0 || row == cubeSize - 1) && (col == 0 || col == cubeSize - 1)) ||
                (col == 0 && row == cubeSize - 1) ||
                (row == 0 && col == cubeSize - 1);
        },
        _v[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0 && col < cubeSize - 1; },
        _v[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0 && col < cubeSize - 1; },
        _v[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0 && col > 0; },
        _v[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0 && col > 0; },
        _v),
    _a[constants_1.Masking.F2L1] = (_w = {},
        _w[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _w[constants_1.Face.D] = function (row, col, cubeSize) { return row !== 0 || col !== cubeSize - 1; },
        _w[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0 && col > 0; },
        _w[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0; },
        _w[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0 && col < cubeSize - 1; },
        _w[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0; },
        _w),
    _a[constants_1.Masking.F2B] = (_x = {},
        _x[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _x[constants_1.Face.D] = function (row, col, cubeSize) { return col == 0 || col == cubeSize - 1; },
        _x[constants_1.Face.R] = function (row, col, cubeSize) { return row > 0; },
        _x[constants_1.Face.L] = function (row, col, cubeSize) { return row > 0; },
        _x[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0 && (col == 0 || col == cubeSize - 1); },
        _x[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0 && (col == 0 || col == cubeSize - 1); },
        _x),
    _a[constants_1.Masking.LINE] = (_y = {},
        _y[constants_1.Face.U] = function (row, col, cubeSize) { return false; },
        _y[constants_1.Face.D] = function (row, col, cubeSize) { return col > 0 && col < cubeSize - 1; },
        _y[constants_1.Face.R] = function (row, col, cubeSize) { return false; },
        _y[constants_1.Face.L] = function (row, col, cubeSize) { return false; },
        _y[constants_1.Face.F] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _y[constants_1.Face.B] = function (row, col, cubeSize) { return row > 0 && col > 0 && col < cubeSize - 1; },
        _y),
    _a);
function makeMasking(masking, cubeSize) {
    var _a;
    if (!maskingFunctions[masking]) {
        throw new Error("invalid masking " + masking);
    }
    var numStickers = cubeSize * cubeSize;
    var faceValues = (_a = {},
        _a[constants_1.Face.U] = [],
        _a[constants_1.Face.F] = [],
        _a[constants_1.Face.R] = [],
        _a[constants_1.Face.D] = [],
        _a[constants_1.Face.L] = [],
        _a[constants_1.Face.B] = [],
        _a);
    var _loop_1 = function (i) {
        var row = Math.floor(i / cubeSize);
        var col = i % cubeSize;
        constants_1.AllFaces.forEach(function (face) {
            faceValues[face].push(maskingFunctions[masking][face](row, col, cubeSize));
        });
    };
    for (var i = 0; i < numStickers; i++) {
        _loop_1(i);
    }
    return faceValues;
}
exports.makeMasking = makeMasking;
