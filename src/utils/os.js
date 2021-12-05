export const OS = {
  WINDOWS: "Windows",
  ANDROID: "Android",
  IOS: "IOS",
  MAC: "MAC",
  LINUX: "Linux",
  UNDEFINED: "Undefined",
};

export function getOS() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("Windows") !== -1) {
    return OS.WINDOWS;
  }
  if (userAgent.indexOf("Android") !== -1) {
    return OS.ANDROID;
  }
  if (
    userAgent.indexOf("iPad") !== -1 ||
    userAgent.indexOf("iPhone") !== -1 ||
    userAgent.indexOf("iPod") !== -1
  ) {
    return OS.IOS;
  }
  if (userAgent.match(/Mac|PPC/)) {
    return OS.MAC;
  }
  if (userAgent.match(/Linux/)) {
    return OS.LINUX;
  }
  return OS.UNDEFINED;
}
