export const hideLongString = (string, length) => {
  let strLength = string.length;
  if (strLength > length) return string.slice(0, length) + "...";
  else return string;
};

export const TOKEN_CYBERSOFT =
  " ";
export const colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
