import { AllContext } from '../context/Context';
import React, { useContext } from "react";
import axios from 'axios';
import { QRCodeSVG } from 'qrcode.react';
import { useRef } from 'react';
import jsPDF from 'jspdf'
import html2canvas from "html2canvas";

const QrGenerate= () => {
    const reportTemplateRef = useRef(null);
    const {url,setQrGenerate}=useContext(AllContext)
    const downloadPdf = () => {
        html2canvas(reportTemplateRef.current).then((canvas) => {
          const imgData = canvas.toDataURL("image/png");
          const pdf = new jsPDF();
          pdf.addImage(imgData, "JPEG", 53,20);
          pdf.save("QR.pdf");
        });
      };
    return ( 
        <div className="relative z-10 " aria-labelledby="modal-title" role="dialog" aria-modal="true">

  <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity "></div>

  <div className="fixed inset-0 z-10  overflow-y-auto ">
    <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
     
      <div className="relative transform  overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-min sm:max-w-lg">
          <div className="sm:flex sm:items-start">
           
            <div className=" text-center ml-6 mr-6 sm:text-left">
              <h3 className="text-lg font-medium leading-6 text-gray-900" id="modal-title"></h3>
              <div ref={reportTemplateRef} className=" mt-2 ">
                <QRCodeSVG value={url} size='256' className=' '/>
              </div>
            </div>
          </div>
        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
          <button onClick={()=>setQrGenerate(false)} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Close</button>
          <button onClick={()=>downloadPdf()} type="button" className="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">Download QR as Pdf</button>
        </div>
      </div>
    </div>
  </div>
</div>

     );
}
 
export default QrGenerate ;