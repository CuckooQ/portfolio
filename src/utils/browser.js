export const BROWSER = {
  CHROME: "Chrome",
  FIREFOX: "Firefox",
  EDGE: "Edge",
  Safari: "Safari",
  UNDEFINED: "Undefined",
};

export function getBrowser() {
  const userAgent = navigator.userAgent;
  const vendor = navigator.vendor;
  if (userAgent.indexOf("Edg") !== -1) {
    return BROWSER.EDGE;
  }
  if (userAgent.indexOf("Chrome") !== -1 && vendor === "Google Inc.") {
    return BROWSER.CHROME;
  }
  if (userAgent.indexOf("Firefox") !== -1) {
    return BROWSER.FIREFOX;
  }
  if (userAgent.indexOf("Safari") !== -1 && vendor === "Apple Computer, Inc.") {
    return BROWSER.Safari;
  }
  return BROWSER.UNDEFINED;
}
