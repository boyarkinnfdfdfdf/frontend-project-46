import path from 'path';
import fs from 'fs';
import parser from "./parser.js";

export default (filepath1, filepath2) => {
    const content1 = fs.readFileSync(path.resolve(filepath1), 'utf8');
    const content2 = fs.readFileSync(path.resolve(filepath2), 'utf8');
 // console.log('filepath1', fs.readFileSync(path.resolve(filepath1), 'utf8'));
 // console.log('filepath2', fs.readFileSync(path.resolve(filepath2), 'utf8'));
 const parserData1 = parser(content1);
 const parserData2 = parser(content2);
 console.log('parserData1', parserData1);
 console.log('parserData2', parserData2);
 return content1 === content2;
};