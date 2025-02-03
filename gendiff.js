#!/usr/bin/env node
import path from 'path';
import { Command } from 'commander';
import fs from 'fs';
import app from './src/parser.js';

 // const { Command } = require('commander');

const program = new Command();


const gendiff = program
.name('gendiff')
.description('Compares two configuration files and shows a difference.')
.version('1.0.0')
.option('-f, --format <type>', 'type format')
.argument('<filepath1>')
.argument('<filepath2>')
.action((a, b, options) => {
    console.log(app(a, b, options)); 
    });

gendiff
.command('split')
.argument('<string>')
.action((str) => {
    console.log(str.split(':'));
}) 
gendiff
.command('generate')
.description('generate template for project')
.action(() => {
    const srcDir = path.join(process.cwd(),'src');
    const indexFile = path.join(srcDir, 'index.js');
    const parserFile = path.join(srcDir, 'parser.js');

    if (!fs.existsSync(srcDir)) {
        fs.mkdirSync(srcDir);
    }

    const parserContent = "export default () => {\n console.log('parser');\n};";
    fs.writeFileSync(parserFile, parserContent);

    const indexFileContent = "import parser from './parser';\n\nexport default () => {\n console.log('gendiff');\n parser();\n};";
    fs.writeFileSync(indexFile, indexFileContent);
    console.log('Project structure generated successfully');
});   

gendiff.parse();




