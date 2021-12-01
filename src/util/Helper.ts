/**
 * @ author: richen
 * @ copyright: Copyright (c) - <richenlin(at)gmail.com>
 * @ license: BSD (3-Clause)
 * @ version: 2020-05-10 11:49:15
 */
import * as Helper from "koatty_lib";
import { Logger } from "./Logger";
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
const ARGUMENT_NAMES = /([^\s,]+)/g;
const pkg = require("../../package.json");
// export Helper
export * as Helper from "koatty_lib";

/**
 *
 *
 * @export
 * @param {string} p
 * @returns
 */
export function requireDefault(p: string) {
    /* eslint-disable global-require */
    const ex = require(p);
    return (ex && (typeof ex === "object") && "default" in ex) ? ex.default : ex;
}

/**
 *
 *
 * @export
 * @param {string} name
 * @param {string} [controllerSuffix=""]
 * @returns
 */
let controllerReg: any = null;
export function ControllerMatch(name: string, controllerSuffix = "") {
    if (!controllerReg) {
        controllerReg = new RegExp(`([a-zA-Z0-9_]+)${controllerSuffix}`);
    }

    const result = name.split(".")[0].match(controllerReg);
    return result;
}


/**
 * get parameter name from function
 * @param func
 */
export function getParamNames(func: { toString: () => { replace: (arg0: RegExp, arg1: string) => any } }) {
    const fnStr = func.toString().replace(STRIP_COMMENTS, "");
    let result = fnStr.slice(fnStr.indexOf("(") + 1, fnStr.indexOf(")")).match(ARGUMENT_NAMES);
    if (result === null) {
        result = [];
    }
    return result;
}

/**
 * check node version
 * @return {void} []
 */
export function checkRuntime() {
    let nodeEngines = pkg.engines.node.slice(1) || '10.0.0';
    nodeEngines = nodeEngines.slice(0, nodeEngines.lastIndexOf('.'));
    let nodeVersion = process.version;
    if (nodeVersion[0] === 'v') {
        nodeVersion = nodeVersion.slice(1);
    }
    nodeVersion = nodeVersion.slice(0, nodeVersion.lastIndexOf('.'));

    if (Helper.toNumber(nodeEngines) > Helper.toNumber(nodeVersion)) {
        Logger.Error(`Koatty need node version > ${nodeEngines}, current version is ${nodeVersion}, please upgrade it.`);
        process.exit(-1);
    }
}

/**
 * Check class file 
 * name should be always the same as class name
 * class must be unique
 *
 * @export
 * @param {string} fileName
 * @param {string} xpath
 * @param {*} target
 * @param {Set<unknown>} [exSet]
 * @returns {*}  
 */
const exSet = new Set();
export function checkClass(fileName: string, xpath: string, target: any, exSet?: Set<unknown>) {
    if (Helper.isClass(target) && target.name != fileName) { // export default class name{}
        throw Error(`The file(${xpath}) name should be always the same as class name.`);
    }
    if (target["__esModule"]) {
        if (target.name === undefined) { // export class name{}
            const keys = Object.keys(target);
            if (keys[0] != fileName && Helper.isClass(target[keys[0]])) {
                throw Error(`The file(${xpath}) name should be always the same as class name.`);
            }
        } else if (target.name != fileName) { // export default class {}
            throw Error(`The file(${xpath}) name should be always the same as class name.`);
        }
    }
    if (!exSet) {
        return;
    }
    if (exSet.has(fileName)) {
        throw new Error(`A same class already exists. at \`${xpath}\`.`);
    }
    exSet.add(fileName);

    return;
}