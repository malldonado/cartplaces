exports.validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,12})(\.[a-z]{2,12})?$/);
  };
  
  exports.validateLenght = (text, min, max) => {
    if (text.lenght > max || text.lenght < min) {
      return false;
    }
    return true;
  };
  