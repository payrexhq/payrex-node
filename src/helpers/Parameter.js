function Parameter() {}

Parameter.encode = (params, prefix = '') => {
  const finalQuery = [];
  
  for(const [key, value] of Object.entries(params)) {
    let newKey = prefix === '' ? key : `${prefix}[${key}]`

    if(prefix === '') {
      newKey = key;
    } else {
      if(
        !isNaN(key) &&
        !Array.isArray(value) &&
        (typeof value !== 'object' && value !== null)
      ) {
        newKey = `${prefix}[]`;
      } else {
        newKey = `${prefix}[${key}]`;
      }
    }

    if(typeof value === 'object' && value !== null) {
      finalQuery.push(Parameter.encode(value, newKey));
    } else {
      finalQuery.push(
        `${encodeURI(newKey)}=${encodeURI(value)}`
      );
    }
  }

  return finalQuery.join('&');
}

module.exports = Parameter;