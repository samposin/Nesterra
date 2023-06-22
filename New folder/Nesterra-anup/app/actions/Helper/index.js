export const boxColor = item => {
  switch (true) {
    case item === 'Active':
      return '#c6efcd';

    case item === 'Inactive':
      return '#ffc8ce';
  }
};
