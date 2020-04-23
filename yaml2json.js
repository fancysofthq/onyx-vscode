var inputfile = 'syntaxes/onyx.tmLanguage.yaml',
  outputfile = 'syntaxes/onyx.tmLanguage.json',
  yaml = require('js-yaml'),
  fs = require('fs'),
  obj = yaml.load(fs.readFileSync(inputfile, { encoding: 'utf-8' }));

fs.writeFileSync(outputfile, JSON.stringify(obj, null, 2));
console.info("OK")
