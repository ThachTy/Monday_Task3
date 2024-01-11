export const sliceString = (text = "", numberSlice = 0) => {
  let sliceText = text;
  if (sliceText.length === 0 || typeof text !== "string") return;

  sliceText =
    sliceText.length > numberSlice
      ? sliceText.slice(0, numberSlice) + "..."
      : sliceText;

  return sliceText;
};
