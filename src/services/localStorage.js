

const get = (key, defaultValue) => {
  const localStorageData = localStorage.getItem(key);
  if (localStorageData === null) {
    return defaultValue;
  } else {
    return JSON.parse(localStorageData);
  }
};

// guarda 
const set = (key, value) => {
  const localStorageData = JSON.stringify(value);
  localStorage.setItem(key, localStorageData);
};

// borra 
const remove = (key) => {
  localStorage.removeItem(key);
};

// limpia 
const clear = () => {
  localStorage.clear();
};


const objectToExport = {
  get: get,
  set: set,
  remove: remove,
  clear: clear,
};


export default objectToExport;
