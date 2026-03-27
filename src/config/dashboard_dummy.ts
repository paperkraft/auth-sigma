// --- MOCK DATA ---
export const RECENT_PROJECTS = [
    {
        id: "p1",
        name: "Kolhapur Corporation",
        type: "AquaBill",
        lastEdited: "2 hours ago",
        status: "success",
        thumbnail: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "p2",
        name: "Water Distribution Network",
        type: "WaterLab",
        lastEdited: "1 week ago",
        status: "success",
        thumbnail: "https://images.unsplash.com/photo-1476973422084-e0fa66ff9456?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "p3",
        name: "Simulation Network",
        type: "WaterLab",
        lastEdited: "1 week ago",
        status: "draft",
    },
];

export const ACTIVITY_FEED = [
    { id: 1, text: "Simulation 'Run 4' completed successfully.", time: "10m ago", type: "success" },
    { id: 2, text: "Project 'Valve Test' was shared with you.", time: "2h ago", type: "info" },
    { id: 3, text: "Core hour limit reached (80%).", time: "5h ago", type: "warning" },
];