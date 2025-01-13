'use client';
// import { useState } from 'react';
import StudioEditorBuilder from '@/components/studioeditorbuilder'

// export default function Home() {
//   const [projectType, setProjectType] = useState<boolean>(false);

//   return (
//     <main className="flex h-screen flex-col justify-between p-5 gap-2">
//       <div className="p-1 flex gap-5 items-center">
//         <div className="font-bold">Builder APP</div>
//         <button className="border rounded p-2" >
//           Log Project Data
//         </button>
//         <button className="border rounded p-2">
//           Log HTML/CSS
//         </button>

//         <label className="inline-flex items-center cursor-pointer p-2">
//           <input type="checkbox" value='' className="sr-only peer" />
//           <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
//           <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{projectType ? 'web' : 'email'}</span>
//         </label>

//       </div>
//       <div className="flex-1 w-full h-full overflow-hidden">
        
//       </div>
//     </main>
//   );
// }

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';

export default function Dashboard() {
    const [projectType, setProjectType] = useState<boolean>(false);
  return (
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
        <CardDescription>View all customers and their orders.</CardDescription>
        <main className="flex h-screen flex-col justify-between p-5 gap-2">
       <div className="p-1 flex gap-5 items-center">
         <div className="font-bold">Builder APP</div>
         <button className="border rounded p-2" >
           Log Project Data
         </button>
         <button className="border rounded p-2">
           Log HTML/CSS
         </button>

         <label className="inline-flex items-center cursor-pointer p-2">
           <input type="checkbox" value='' className="sr-only peer" />
           <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
           <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{projectType ? 'web' : 'email'}</span>
         </label>

       </div>
       <div className="flex-1 w-full h-full overflow-hidden">
            <StudioEditorBuilder projectType={projectType} />
       </div>
     </main>
    
      </CardHeader>
      <CardContent />
    </Card>
  );
}
