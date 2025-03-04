import { readFileSync } from 'fs';
import { resolve } from 'path';
import { cwd } from 'process';
import parseFile from './parsers.js';
import buildDiff from './buildDiff.js';
import form from './formatters/formatters.js';

const readfile = (filepath) => readFileSync(resolve(cwd(), filepath), 'utf-8');

const getExtension = (file) => file.split('.').pop();

const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = parseFile(getExtension(filepath1), readfile(filepath1));
  const file2 = parseFile(getExtension(filepath2), readfile(filepath2));
  return form(buildDiff(file1, file2), format);
};

export default genDiff;
