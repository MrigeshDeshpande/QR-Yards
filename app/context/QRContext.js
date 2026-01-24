"use client";

import { createContext, useContext, useState } from "react";

const QRContext = createContext();

export function QRProvider({ children }) {
    const [qrState, setQrState] = useState({
        name: "",
        type: "website", // default type
        content: {
            url: "",
            // Website specific
            enableTimeSchedule: false,
            schedule: {
                startDate: "",
                endDate: "",
            },
            basicInfo: {
                multiLanguage: false,
                multiCountry: false,
            },
            stats: {
                enable: false,
            },
            urlConfig: {
                autoGenerate: true,
                customUrl: "",
            },
            scanLimit: {
                enable: false,
                limit: 0,
            },
            configuration: {
                folder: "No folder",
                domain: "qrty.com",
                password: {
                    enable: false,
                    value: "",
                },
            },
        },
        design: {
            // Future proofing for design builder
        },
    });

    const updateQrData = (section, key, value) => {
        setQrState((prev) => {
            // Handle nested updates if section is provided
            if (section) {
                return {
                    ...prev,
                    content: {
                        ...prev.content,
                        [section]: {
                            ...prev.content[section],
                            [key]: value,
                        },
                    },
                };
            }
            // Handle top-level content updates
            return {
                ...prev,
                content: {
                    ...prev.content,
                    [key]: value,
                },
            };
        });
    };

    const setQrName = (name) => {
        setQrState((prev) => ({ ...prev, name }));
    };

    return (
        <QRContext.Provider value={{ qrState, setQrState, updateQrData, setQrName }}>
            {children}
        </QRContext.Provider>
    );
}

export function useQR() {
    return useContext(QRContext);
}
