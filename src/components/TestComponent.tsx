import { useEffect } from "react";
import { fetchDummyData, fetchWithError, downloadSamplePDF, simulateValidationError } from "../services/testService";
export default function TestComponent() {
    useEffect(() => {
        (async () => {
            console.log("🟡 Dummy data test");
            const res1 = await fetchDummyData();
            console.log(res1);

            console.log("🔴 Error test");
            const res2 = await fetchWithError();
            console.log(res2);

            console.log("📄 PDF download test");
            const res3 = await downloadSamplePDF();
            if (res3.isSuccess && (res3.data as any).blob) {
                const { blob, filename } = res3.data as any;
                const url = URL.createObjectURL(blob);
                const a = document.createElement("a");
                a.href = url;
                a.download = filename;
                a.click();
                URL.revokeObjectURL(url);
            } else {
                console.log("Error descargando:", res3.message);
            }

            console.log("⚠️ Simulación error validación");
            const res4 = await simulateValidationError();
            console.log(res4);
        })();
    }, []);

    return <div className="p-4">Check console for test results 🚀</div>;
}
