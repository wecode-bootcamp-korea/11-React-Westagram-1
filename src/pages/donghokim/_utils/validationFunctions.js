const validationFunctions = {
  isIdAndPasswordMinOnce: function (idValue, passwordValue) {
    return idValue && passwordValue;
  },
  isIdHasAtAndPasswordMinFive: function (idValue, passwordValue) {
    console.log(idValue, passwordValue);
    return idValue.includes("@") && passwordValue.length > 4;
  },
};

export const {
  isIdAndPasswordMinOnce,
  isIdHasAtAndPasswordMinFive,
} = validationFunctions;
