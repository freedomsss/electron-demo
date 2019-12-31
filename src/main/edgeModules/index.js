import path from 'path';

const edge = require('electron-edge-js');
// const path = require('path');

const helloWorld = edge.func(`
    async (input) => {
        return ".NET Welcomes " + input.ToString();
    }
`);

const add = edge.func({
  assemblyFile: path.join(__static, 'ClassLibrary1.dll'),
  typeName: 'ClassLibrary1.Class1',
  methodName: 'Add',
});

// const add = edge.func({
//   assemblyFile: path.join(__static, 'ClassLibrary1.dll'),
//   typeName: 'ClassLibrary1.Class1',
//   methodName: 'Add',
// });

const Fun3 = () => {
  // console.log('ttttt');
};

export default {
  Fun3,
  helloWorld,
  add,
};
