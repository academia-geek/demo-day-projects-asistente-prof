export const resetLS = (resetarTest, setResetarTest) => {
  console.log('resetarTest', resetarTest);
  const rese = JSON.parse(localStorage.getItem('reset'));
  if (rese === null) {
    localStorage.setItem('reset', JSON.stringify(resetarTest));
  } else {
    if (rese) {
      setResetarTest(true);
    } else {
      localStorage.setItem('reset', JSON.stringify(resetarTest));
    }
  }
};
