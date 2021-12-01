export const BROWSER = {
  CHROME: "Chrome",
  FIREFOX: "Firefox",
  EDGE: "Edge",
  Safari: "Safari",
};

export function getBrowser() {
  const userAgent = navigator.userAgent;
  if (userAgent.indexOf("chrome") !== -1) {
    return BROWSER.CHROME;
  }
  if (userAgent.indexOf("Firefox") !== -1) {
    return BROWSER.FIREFOX;
  }
  if (userAgent.indexOf("safari") !== -1) {
    return BROWSER.Safari;
  }
  if (userAgent.indexOf("Edge") !== -1) {
    return BROWSER.EDGE;
  }
}
