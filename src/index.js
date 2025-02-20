import parser from './parser.js';
import fs from 'fs';
import path from 'path';
import _ from 'lodash';


export default (filepath1, filepath2) => {
    const content1 = fs.readFileSync(path.resolve(filepath1), 'utf-8');
    const content2 = fs.readFileSync(path.resolve(filepath2), 'utf-8');
    // console.log('filepath1', fs.readFileSync(path.resolve(filepath1), 'utf-8'));
    // console.log('filepath2', fs.readFileSync(path.resolve(filepath2), 'utf-8'));
    const ext1 = path.extname(filepath1).substring(1); 
    const ext2 = path.extname(filepath2).substring(1);
    const parsedData1 = parser(content1, ext1);
    const parsedData2 = parser(content2, ext2);
    
   const genDiff = (obj1, obj2) => {
        const keys = [...new Set([...Object.keys(obj1), ...Object.keys(obj2)])].sort();
        const diff = keys.map((key) => {
            if (!Object.hasOwn(obj2, key)) {
                return `    - ${key}: ${obj1[key]}`;
            }
            if (!Object.hasOwn(obj1, key)) {
                return `    + ${key}: ${obj2[key]}`;
            }
            if (obj1[key] !== obj2[key]) {
                return `    - ${key}: ${obj1[key]}\n    + ${key}: ${obj2[key]}`;
            }
            return `      ${key}: ${obj1[key]}`;
        });
        return `{\n${diff.join('\n')}\n}`;
    };
     return genDiff(parsedData1, parsedData2);
};






    // const buildTree = (obj1, obj2) => {
    //     const keys = _.sortBy(_.union(Object.keys(obj1), Object.keys(obj2)));

    //     return keys.map((key) => {
    //         if (!Object.hasOwn(obj2, key)) {
    //             return { key, type: 'added', value: obj2[key] };
    //         }
    //         if (!Object.hasOwn(obj1, key)) {
    //             return { key, type: 'removed', value: obj1[key] };
    //         }
    //         if (_.isObject(obj1[key]) && _.isObject(obj2[key])) {
    //             return { key, type: 'nested', children: buildTree(obj1[key], obj2[key]) };
    //         }
    //         if (!_.isEqual(obj1[key], obj2[key])) {
    //             return { key, type: 'changed', oldValue: obj1[key], newValue: obj2[key] };
    //         }
    //         return { key, type: 'unchanged', value: obj1[key] };
    //     });     
    // };
    // return buildTree(parsedData1, parsedData2);
