import { useState, useEffect } from "react";
import QRCODE from "qrcode";
import "../styles/QRCode.scss";

function QRCode() {
  const [src, setSrc] = useState("");

  useEffect(() => {
    QRCODE.toDataURL(`https://${window.location.host}/#contact`).then(
      (data) => {
        setSrc(data);
      }
    );
  }, []);

  return (
    <div className="qr-code">
      <img src={src} alt="QR CODE"></img>
    </div>
  );
}

export default QRCode;
