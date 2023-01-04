export const getStrategies = async () => {
  try {
    const res = await fetch("https://google.com");
    return await res.json();
  } catch (e) {
    return null;
  }
};
