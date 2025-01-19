'use client'
import { Analytics } from '@vercel/analytics/react';
import Headers from "@/components/Headers";
import Footers from "@/components/Footers";

export default function DashboardLayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <Headers />
            {children}
            <Footers />
            <Analytics />
        </>
    );
}