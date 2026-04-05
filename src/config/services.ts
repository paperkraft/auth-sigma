import { Droplets, ShieldCheck, Wallet } from "lucide-react";

export interface ServiceConfig {
    id: string;
    name: string;
    description: string;
    url: string;
    icon: any;
    color: string;
    themeColor: string;
}

export const SERVICES: ServiceConfig[] = [
    {
        id: "auth",
        name: "Sigma Toolbox",
        description: "Manage your profile, security settings, and team access from a central location.",
        url: "http://localhost:4000",
        icon: ShieldCheck,
        color: "text-blue-600 bg-blue-50 border-blue-100 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-800",
        themeColor: "blue",
    },
    {
        id: "waterlab",
        name: "WaterLab",
        description: "Advanced hydraulic simulation and water network analysis for precision engineering.",
        url: "http://localhost:4002",
        icon: Droplets,
        color: "text-cyan-600 bg-cyan-50 border-cyan-100 dark:bg-cyan-900/30 dark:text-cyan-300 dark:border-cyan-800",
        themeColor: "cyan",
    },
    {
        id: "aquabill",
        name: "AquaBill",
        description: "Comprehensive billing, connection management, and revenue collection suite.",
        url: "http://localhost:4001",
        icon: Wallet,
        color: "text-indigo-600 bg-indigo-50 border-indigo-100 dark:bg-indigo-900/30 dark:text-indigo-300 dark:border-indigo-800",
        themeColor: "indigo",
    },
];
