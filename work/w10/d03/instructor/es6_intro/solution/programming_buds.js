'use strict';

let scaryNewPeeps = [
  'Yael Amir',
  'Oat Asdon',
  'Ray Chen',
  'James Coslett',
  'Michael Duran',
  'Tony Estese',
  'Jasmine Guzman',
  'Demetra Haloutsos',
  'Tim Kim',
  'Jerry Lee',
  'Jerry Ngov',
  'David Niederhauser',
  'Adrian Nuyda',
  'Yel Padillo',
  'Michael Pascual',
  'Karen Quan',
  'Pare Saku',
  'Claire Savage',
  'Jonah Sobol',
  'Duane Than',
  'Keith To',
  'Nelson Valdivia'
];

let friends4eva = friends => {
  let buds4eva = '';
  friends.forEach((bud,index) => {
    if (index !== friends.length-1) {
      buds4eva += `${bud} and `
    } else {
      buds4eva += `${bud} are programming buds foreva!`
    }
  });
  return buds4eva;
}

export default {
  scaryNewPeeps: scaryNewPeeps,
  friends4eva: friends4eva
};
