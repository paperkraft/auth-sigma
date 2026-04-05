# Folder Structure 
```
📁 High-Level Structure

src/
├── app/
├── components/
├── config/
├── features/
├── hooks/
├── lib/
├── services/
├── store/
├── styles/
├── types/
├── utils/
├── middleware.ts

📂 app/ – Routing Layer (App Router)

src/app/
├── (public)/
│   ├── auth/
│   │   ├── sign-in/
│   │   │   └── page.tsx
│   │   ├── sign-up/
│   │   │   └── page.tsx
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   ├── reset-password/
│   │   │   └── page.tsx
│   │   └── change-password/
│   │       └── page.tsx
│   └── layout.tsx
│
├── (protected)/
│   ├── (core)/
│   │   ├── collaboration/
│   │   │   ├── page.tsx
│   │   ├── dashboard/
│   │   │   ├── page.tsx
│   │   ├── settings/
│   │   │   ├── profile/
│   │   │   │   └── page.tsx
│   │   ├── shared-projects/
│   │   │   ├── page.tsx
│   │   ├── subscription/
│   │   │   ├── page.tsx
│   │   └── layout.tsx
│   │
│   ├── projects/
│   │   ├── auqabill/
│   │   │   ├── [projectId]/
│   │   │   │   ├── not-found.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── waterlab/
│   │   │   ├── [projectId]/
│   │   │   │   ├── not-found.tsx
│   │   │   │   └── page.tsx
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   ├── smartmeter/
│   │   │   └── ...
│   │   │
│   │   └── page.tsx
│   │
├── api/
│   ├── auth/
│   │   ├── sign-in/route.ts
│   │   ├── sign-up/route.ts
│   │   ├── forgot-password/route.ts
│   │   ├── reset-password/route.ts
│   │   └── change-password/route.ts
│   │
│   └── projects/
│       └── route.ts
│
├── layout.tsx
└── page.tsx

📂 features/ – Business Logic

src/features/
├── auth/
│   ├── components/
│   ├── hooks/
│   ├── services.ts
│   ├── validators.ts
│   └── types.ts
│
├── projects/
│   ├── auqabill/
│   │   ├── components/
│   │   ├── hooks/
│   │   └── services.ts
│   │
│   ├── waterlab/
│   │   └── ...
│   └── smartmeter/
│       └── ...

📂 components/ – Shared UI

src/components/
├── ui/
│   ├── button.tsx
│   ├── input.tsx
│   └── modal.tsx
│
├── layout/
│   ├── sidebar.tsx
│   ├── header.tsx
│   └── footer.tsx
│
└── auth/
    └── auth-guard.tsx
```