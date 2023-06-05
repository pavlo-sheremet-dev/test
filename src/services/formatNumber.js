const formatNumber = followers => {
  let numberString = followers.toString();

  if (numberString.length > 3) {
    const thirdFromEnd = numberString.charAt(numberString - 3);
    numberString =
      numberString.slice(0, numberString.length - 3) +
      ',' +
      thirdFromEnd +
      numberString.slice(numberString.length - 3);
  }

  return numberString;
};

export default formatNumber;
