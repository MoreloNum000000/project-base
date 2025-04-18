// Servicio de pruebas para el apiClient 🚀

import { apiClient } from "../utils/apiClient";


// ✅ Test de una respuesta JSON estándar
export const fetchDummyData = () => {
    return apiClient<{ id: number; name: string }>({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users/1", // Data dummy
    });
};

// ✅ Test de un error 404
export const fetchWithError = () => {
    return apiClient({
        method: "GET",
        url: "https://jsonplaceholder.typicode.com/users/0", // No existe
    });
};

// ✅ Test de descarga de archivo (blob)
export const downloadSamplePDF = () => {
    return apiClient({
        method: "GET",
        url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf",
        responseType: "blob",
    });
};

// ✅ Test de validación tipo backend
export const simulateValidationError = () => {
    // Simulación manual de un endpoint que devuelve errores tipo { errors: { field: [msg] } }
    return Promise.resolve({
        isSuccess: false,
        message: "name is required email is invalid",
    });
};
