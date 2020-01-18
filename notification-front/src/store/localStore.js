import ls from 'local-storage';

const prefix = '$';

export function setLocalHello(associateId) {
  ls.set(`${prefix}ID`, associateId);
}

export function getLocalHello() {
  return ls.get(`${prefix}ID`);
}
