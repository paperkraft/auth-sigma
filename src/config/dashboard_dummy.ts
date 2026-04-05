// --- MOCK DATA ---
export const RECENT_PROJECTS = [
    {
        id: "p1",
        name: "Identity Audit 2026",
        type: "Security",
        lastEdited: "2 hours ago",
        status: "success",
        thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2670&auto=format&fit=crop",
    },
    {
        id: "p2",
        name: "Permission Matrix Review",
        type: "Governance",
        lastEdited: "1 week ago",
        status: "success",
        thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop",
    },
    {
        id: "p3",
        name: "Multi-Factor Rollout",
        type: "Auth",
        lastEdited: "1 week ago",
        status: "draft",
    },
];

export const ACTIVITY_FEED = [
    { id: 1, text: "Security policy 'MFA Enforcement' updated.", time: "10m ago", type: "success" },
    { id: 2, text: "Organization profile was updated by Admin.", time: "2h ago", type: "info" },
    { id: 3, text: "Monthly active user limit reached (80%).", time: "5h ago", type: "warning" },
];