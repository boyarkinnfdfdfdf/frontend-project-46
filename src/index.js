import parser from './parser.js';
import fs from 'fs';
import path from 'path';


export default (filepath1, filepath2) => {

    console.log('filepath1', fs.readFileSync(path.resolve(filepath1), 'utf-8'));
    console.log('filepath2', fs.readFileSync(path.resolve(filepath2), 'utf-8'));
    parser();
}

