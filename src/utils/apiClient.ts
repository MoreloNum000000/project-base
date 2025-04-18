// Utilidad desarrollada e implementada por Jorge Morelo 💻🔥

import axios, { AxiosRequestConfig } from "axios";
import { extractErrorMessage } from "./extractErrorMessage";

interface ApiResponse<T> {
    isSuccess: boolean;
    data?: T;
    message?: string;
}

export const apiClient = async <T = unknown>(
    config: AxiosRequestConfig
): Promise<ApiResponse<T>> => {
    try {
        const res = await axios({
            responseType: config.responseType ?? "json",
            ...config,
        });

        const contentType = res.headers["content-type"];

        // ✅ Manejo de archivos (blob)
        if (contentType?.includes("application/octet-stream") || contentType?.includes("application/pdf")) {
            const disposition = res.headers["content-disposition"];
            const filenameMatch = disposition?.match(/filename="?(.+)"?/);
            const filename = filenameMatch?.[1] || "archivo-desconocido";

            return {
                isSuccess: true,
                data: {
                    blob: res.data,
                    filename,
                    contentType,
                } as any, // puedes tiparlo más adelante si sabes el tipo
            };
        }

        //Respuesta estándar
        return {
            isSuccess: true,
            data: res.data,
        };
    } catch (error: any) {
        return {
            isSuccess: false,
            message: extractErrorMessage(error),
        };
    }
};
