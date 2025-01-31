'use client'
import { Analytics } from '@vercel/analytics/react';
import Headers from "@/components/Headers";
import Footers from "@/components/Footers";
import { ToastProvider } from '@apideck/components'


export default function HomePage({children}: {children: React.ReactNode;}) {
    return (
      <ToastProvider>
        <Headers />
          {children}
        <Footers />
        <Analytics />
      </ToastProvider>
    )
  }