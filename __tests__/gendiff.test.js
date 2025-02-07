import genddiff from '../src/index.js';
import path from 'path';
import fs from 'fs';

const getFixturesPath = (filename) => path.resolve(process.cwd(), filename);
const result = fs.readFileSync(getFixturesPath('result.txt'), 'utf-8').trim();
console.log('result:', result);
test('gendiff', () => {
    expect(
        genddiff(getFixturesPath('file1.json'),getFixturesPath('file2.json'))
    )
    .toEqual(result);
})



