import lodash from 'lodash';

import {helloUtil} from './util/myutil';

export function helloClient() {
  let x = lodash.partition([1, 2, 3, 4], n => n % 2);
  console.log(`hello client ${x}`);
  
  helloUtil();
}
