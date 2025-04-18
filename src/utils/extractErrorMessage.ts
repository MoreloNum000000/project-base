// utils/extractErrorMessage.ts
export const extractErrorMessage = (error: any): string => {
    if (!error) return "Error desconocido";

    if (error.response?.data?.errors) {
        const validationErrors = error.response.data.errors;
        return Object.values(validationErrors).flat().join(" ");
    }

    if (error.response?.data instanceof Blob) {
        return "El servidor devolvió un archivo cuando se esperaba un error legible.";
    }

    return (
        error.response?.data?.message ||
        error.response?.data?.detail ||
        error.message ||
        "Error desconocido"
    );
};
