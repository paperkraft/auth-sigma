"use client";

import { ChevronDown, Grip, LayoutGrid } from "lucide-react";
import { usePathname } from "next/navigation";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SERVICES } from "@/config/services";
import { cn } from "@/lib/utils";

export function AppSwitcher() {
    const pathname = usePathname();

    // Determine current service based on URL or logic.
    // For the auth app, we are usually in the "Identity Hub".
    const currentService = SERVICES.find(s => s.id === "auth") || SERVICES[0];

    const handleSwitch = (url: string) => {
        window.location.href = url;
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button className="group flex items-center justify-center size-8 rounded-full hover:bg-muted transition-all duration-300 active:scale-90" aria-label="App Launcher">
                    <Grip className="text-muted-foreground" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-64 p-2 mr-4 shadow-xl border-border/50 backdrop-blur-sm bg-card/95">
                <DropdownMenuLabel className="flex items-center gap-2 px-2 py-1.5 text-xs font-bold text-muted-foreground uppercase tracking-wider">
                    <LayoutGrid size={14} /> Available Modules
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="mx-2 my-1" />
                <DropdownMenuGroup className="space-y-1">
                    {SERVICES.map((service) => (
                        <DropdownMenuItem
                            key={service.id}
                            className={cn(
                                "flex items-start gap-3 p-2 cursor-pointer rounded-lg transition-all duration-200",
                                service.id === currentService.id ? "bg-muted/60" : "hover:bg-muted"
                            )}
                            onClick={() => handleSwitch(service.url)}
                        >
                            <div className={cn(
                                "flex items-center justify-center size-9 rounded-lg border shadow-sm shrink-0",
                                service.color
                            )}>
                                <service.icon size={20} />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <span className={cn(
                                    "text-sm font-bold leading-tight",
                                    service.id === currentService.id ? "text-primary" : "text-foreground"
                                )}>
                                    {service.name}
                                </span>
                                <span className="text-[10px] text-muted-foreground leading-snug line-clamp-1">
                                    {service.description}
                                </span>
                            </div>
                            {service.id === currentService.id && (
                                <div className="ml-auto flex items-center h-full">
                                    <div className="size-1.5 rounded-full bg-primary animate-pulse" />
                                </div>
                            )}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="mx-2 my-1" />
                <div className="px-2 py-1.5">
                    <button
                        className="w-full text-[10px] font-medium text-center text-muted-foreground hover:text-primary transition-colors"
                        onClick={() => window.location.href = "/"}
                    >
                        Sigma Toolbox Home
                    </button>
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
