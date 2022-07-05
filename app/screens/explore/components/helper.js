export const returnMarkerStyle = points => {
  if (points >= 50) {
    return {
      width: 74,
      height: 74,
      size: 64,
      fontSize: 16,
    };
  }

  if (points >= 25) {
    return {
      width: 60,
      height: 60,
      size: 58,
      fontSize: 15,
    };
  }

  if (points >= 15) {
    return {
      width: 72,
      height: 72,
      size: 54,
      fontSize: 14,
    };
  }

  if (points >= 10) {
    return {
      width: 66,
      height: 66,
      size: 50,
      fontSize: 14,
    };
  }

  if (points >= 8) {
    return {
      width: 60,
      height: 60,
      size: 46,
      fontSize: 13,
    };
  }

  if (points >= 4) {
    return {
      width: 54,
      height: 54,
      size: 40,
      fontSize: 13,
    };
  }

  return {
    width: 48,
    height: 48,
    size: 36,
    fontSize: 12,
  };
};
