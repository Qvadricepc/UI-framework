const path = require('path');
const fs = require('fs');
const icomoonJSON = require('./icomoon/selection.json');

// console.log(icomoonJSON);

function generateIconNamesTypes() {
  let content = 'export type TIconNames =';

  icomoonJSON.icons.forEach((icon, index) => {
    const iconName = icon.properties.name;
    content += `${index === 0 ? '' : '|'}'${iconName}'`;
  });

  content += ';';

  fs.writeFileSync(
    path.resolve('src/common/components/o-svg-icon', 'types.icons.ts'),
    content,
    { encoding: 'utf8', flag: 'w' }
  );
}

generateIconNamesTypes();

// function generateIconNamesEnum() {
//   let content = 'export enum EIconNames {';
//
//   icomoonJSON.icons.forEach((icon) => {
//     const iconName = icon.properties.name;
//     content += `'${iconName}' = '${iconName}',`;
//   });
//
//   content += '};';
//
//   fs.writeFileSync(
//     path.resolve('src/common/components/o-svg-icon', 'enum.icons.ts'),
//     content,
//     { encoding: 'utf8', flag: 'w' }
//   );
// }
//
// generateIconNamesEnum();
