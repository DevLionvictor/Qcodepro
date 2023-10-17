import QRCode from "react-qr-code";
import { useState, useRef } from "react";
import html2canvas from 'html2canvas';

function Code({codeData, displayCode}){

    const qrCodeRef = useRef(null);

  const downloadQRCode = () => {
    html2canvas(qrCodeRef.current).then((canvas) => {
      const qrCodeImage = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = qrCodeImage;
      link.download = 'qrcode.png';
      link.click();
    });
}
    
    
    return(
    <div className={displayCode == true ? 'display' : 'hide'}>
                <h3>Generated Code</h3>
                
                <div className="qcard-box">
                <div ref={qrCodeRef}>
                <h3>{codeData.title} </h3>
                <QRCode
                        title={codeData.title}
                        value={codeData.value}
                        bgColor= {codeData.bgColor}
                        fgColor= {codeData.fgColor}
                        size={codeData.size}
                    />
                    </div>
                    
                    </div>
                    
                    <br /> 
               
                     
                     <button onClick={downloadQRCode}>Download PNG</button>
    </div>);

}

export default Code;