export const DEVICE = {
  TABLET: "tablet",
  MOBILE: "mobile",
  DESKTOP: "desktop",
};

export function getDevice() {
  const userAgent = navigator.userAgent;
  window.alert(userAgent);
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(userAgent)) {
    return DEVICE.TABLET;
  }
  if (
    /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(
      userAgent
    )
  ) {
    return DEVICE.MOBILE;
  }
  return DEVICE.DESKTOP;
}
