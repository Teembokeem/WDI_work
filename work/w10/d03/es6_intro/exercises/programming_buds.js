'use strict';

var WDI_DTLA_8 = [
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

function friends4eva(friends) {
  'use strict';
  let buds4eva = '';
  friends.forEach((e,i) => {
    if (i !== friends.length-1) {
      buds4eva += `${e} and `
    } else {
      buds4eva += `${e} are programming buds foreva!`
    }
  });
  return buds4eva;
}

export default {
  scaryNewPeeps: WDI_DTLA_8,
  friends4eva: friends4eva
}
