export const resetLS = (resetarTest, setResetarTest) => {
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
