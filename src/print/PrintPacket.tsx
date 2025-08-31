
import React from "react";
import { printTheme } from "./PrintTheme";
import { PrintContainer } from "./PrintUI";
import { PrintConsent, PrintConfidentiality, PrintROI, PrintDuty, PrintHIPAA, PrintPayment, PrintSignatures, PrintFooter } from "./PrintSections";
export default function PrintPacket() {
  return (<div className="bg-white text-black"><PrintContainer>
    <h1 className="mb-6 text-center text-2xl font-bold">Mental Wellbeing Services – Consent Form</h1>
    <PrintConsent theme={printTheme} /><PrintConfidentiality theme={printTheme} /><PrintROI theme={printTheme} />
    <PrintDuty theme={printTheme} /><PrintHIPAA theme={printTheme} /><PrintPayment theme={printTheme} />
    <PrintSignatures theme={printTheme} /><PrintFooter theme={printTheme} /></PrintContainer></div>);
}
