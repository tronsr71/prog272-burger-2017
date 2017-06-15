// /**
//  * Created by bcuser on 5/10/17.
//  */
// //import 'whatwg-fetch';
// import Logger from './elf-logger';
// const logger = new Logger('data-loader', 'yellow', 'green', '18px');
// import {saveByIndex} from './elf-local-storage';
// //import {getByIndex} from './elf-local-storage';
//
// export default class DataLoader {
//
//   constructor() {
//     this.STORE_SET = ['elven-store', 'set', 'elven-count'];
//     this.loadAddresses = this.loadAddresses.bind(this);
//   }
//
//   dataLoaded() {
//     const elfStore = localStorage.getItem(this.STORE_SET[0]);
//     return (elfStore === this.STORE_SET[1]);
//   }
//
//   setLocalStorage(addresses) {
//     logger.log('SET LOCAL', addresses);
//     localStorage.setItem(this.STORE_SET[0], this.STORE_SET[1]);
//     localStorage.setItem(this.STORE_SET[2], addresses.length);
//     addresses.forEach(function(address, index) {
//       saveByIndex(address, index);
//     });
//     return addresses;
//   }
//
//   loadAddresses(callback) {
//     const that = this;
//     if (this.dataLoaded()) {
//       logger.log('Using data from localstore');
//       callback(localStorage.getItem(this.STORE_SET[2]));
//     } else {
//       logger.log('Loading data');
//       console.log('just before fetch command');
//       fetch('./address-list.json').then(function(data) {
//         console.log('just after fetch command');
//         const addresses = data.json();
//         console.log(addresses);
//         return addresses;
//       }).then(function(data) {
//         logger.log(JSON.stringify(data, null, 4));
//         //console.log(that);
//         that.setLocalStorage(data);
//         callback(data.length);
//       }).catch(function(err) {
//         logger.log(err);
//       });
//     }
//   }
// }

/**
 * Created by bcuser on 5/10/17.
 */

import Logger from './elf-logger';
const logger = new Logger('data-loader', 'yellow', 'green', '18px');
import { getByIndex, saveByIndex, clearLocalStorage } from './elf-local-storage';

export default class DataLoader {

  constructor() {
    this.STORE_SET = ['elven-store', 'set', 'elven-count'];
    this.loadAddresses = this.loadAddresses.bind(this);
  }

  dataLoaded() {
    const elfStore = localStorage.getItem(this.STORE_SET[0]);
    const elfCount = localStorage.getItem(this.STORE_SET[2]);
    return (elfStore === this.STORE_SET[1] && elfCount > 0);
  }

  setLocalStorage(addresses) {
    if (!addresses || addresses.length === 0) {
      const err = 'Addresses missing or zero length ' +
        'in DataLoader setLocalStorage. Is there ' +
        'data in the database? Can you connect to the ' +
        'server?';
      throw new Error(err);
    }
    logger.log('SET LOCAL', addresses);
    localStorage.setItem(this.STORE_SET[0], this.STORE_SET[1]);
    localStorage.setItem(this.STORE_SET[2], addresses.length);
    addresses.forEach(function(address, index) {
      saveByIndex(address, index);
    });
    return addresses;
  }

  loadAddresses(callback) {
    const that = this;
    if (this.dataLoaded()) {
      logger.log('Using data from localstore');
      callback(localStorage.getItem(this.STORE_SET[2]));
    } else {
      logger.log('Loading data');
      fetch('./all-data')
        .then((data) => data.json())
        .then((data) => {
          if (data.error) {
            alert(JSON.stringify(data.error, null, 4));
            callback(0);
            return;
          }
          logger.log(JSON.stringify(data.allData, null, 4));
          that.setLocalStorage(data.allData);
          callback(data.allData.length);
        }).catch(function(err) {
        if (err.message) {
          alert(JSON.stringify(err.message, null, 4));
        } else {
          alert('error' + err);
        }
        logger.log(err);
      });
    }
  }

  clear() {
    clearLocalStorage();
  }

  findByIndex(index) {
    return getByIndex(index);
  }

}
