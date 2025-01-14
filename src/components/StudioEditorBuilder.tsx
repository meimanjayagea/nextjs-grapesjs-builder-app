// import dynamic from 'next/dynamic';
// import StudioEditor from '@grapesjs/studio-sdk/react';
// import '@grapesjs/studio-sdk/style';
// import grapesjs, { Editor } from 'grapesjs';
// import 'grapesjs/dist/css/grapes.min.css';
// import grapesJsTailwind from 'grapesjs-tailwind';
// import { config } from '@/utils/config';


  // const StudioEditorBuilder: React.FC<> = () => {
  //   const configAssets = {
  //   storageType: 'self',
  //   onUpload: async ({ files }) => {
  //     const body = new FormData();
  //     for (const file of files) {
  //       body.append('files', file);
  //     }
  //     const response = await fetch('ASSETS_UPLOAD_URL', { method: 'POST', body });
  //     const result = await response.json();
  //     return result;
  //   },
  //   onLoad: async () => {
  //     const response = await fetch('ASSETS_LOAD_URL');
  //     const result = await response.json();
  //     return [{ src: 'ASSET_URL' }, ...result];
  //   },

  //   onDelete: async ({ assets }) => {
  //     const body = JSON.stringify(assets);
  //     await fetch('ASSETS_DELETE_URL', { method: 'DELETE', body });
  //   }
  // }

  // return (

  //   <StudioEditor
  //     options={{
        // licenseKey: process.env.LICENSE_KEY,
        // identity: {
        //   id: process.env.UNIQUE_END_USER_ID,
        // },
        // project: {
        //   type: 'web',
          // id: process.env.UNIQUE_PROJECT_ID,
//           default: {
//             pages: [
//               { name: 'Home', component: '<h1>Home page</h1>' },
//             ]
//           }
//         },
//         plugins: [
//           grapesJsTailwind,
//         ],
//       }} 
//     />  
//   );
// };

// export default dynamic(() => Promise.resolve(StudioEditorBuilder), { ssr: false });

// import React, { useState, useEffect, useRef } from 'react';
// import grapesjs, { Editor } from 'grapesjs';
// import 'grapesjs/dist/css/grapes.min.css';
// import grapesJsTailwind from 'grapesjs-tailwind';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from '@/components/ui/card';

// interface DashbordProps { }

// const Dashbord: React.FC<DashbordProps> = () => {
//   const [editor, setEditor] = useState<Editor | null>(null);
//   const editorRef = useRef<Editor | null>(null);

//   useEffect(() => {
//     if (!editorRef.current) {
//       const editorInstance = grapesjs.init({
//         container: '#gjs',
//         fromElement: false,
//         height: '100%',
//         width: 'auto',
//         storageManager: false,
//         blockManager: {
//           appendTo: '#blocks',
//         },
//         panels: {
//           defaults: [
//             {
//               id: 'panel-devices',
//               el: '.panel_devices',
//               buttons: [],
//             },
//           ],
//         },
//         canvas: {
//           styles: ['./grapes.css'], // Tambahkan path file CSS sesuai kebutuhan
//         },
//         // plugins: [grapesJsTailwind],
//       });

//       editorInstance.BlockManager.add('box-block', {
//         label: 'Box',
//         content: {
//           type: 'Box',
//           components: [],
//           attributes: { class: 'box-block' },
//         },
//         category: 'Components',
//       });

//       editorInstance.BlockManager.add('text-block', {
//         label: 'Text',
//         content: {
//           type: 'text',
//           components: [],
//         },
//         category: 'Components',
//       });

//       editorRef.current = editorInstance;
//       setEditor(editorInstance);
//     }

//     return () => {
//       editorRef.current?.destroy();
//       editorRef.current = null;
//     };
//   }, []);

//   const handleSave = () => {
//     if (editorRef.current) {
//       const components = editorRef.current.getComponents();
//       const saveComponents = {
//         components: components.toJSON(),
//       }
//       localStorage.setItem("MayPage", JSON.stringify(saveComponents));
//     }
//   }

//   return (
//     <Card>
//       <CardHeader>
//         <CardTitle>Customers</CardTitle>
//         <CardDescription>View all customers and their orders.</CardDescription>
//         <div className="GrapesJsApp">
//           <button onClick={handleSave}> Save </button>
//           <div className="Editor">
//             <div id="blocks">
//               <span>Custome Block</span>
//             </div>

//             <div id="gjs" style={{ height: '100%' }} />
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent />
//     </Card>

//   );
// };

// export default Dashbord;



import React from 'react';
import dynamic from 'next/dynamic';
import StudioEditor, { StudioOptions } from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import grapesJsTailwind from 'grapesjs-tailwind';

// Definisi tipe properti untuk komponen
interface StudioEditorBuilderProps {
  options?: StudioOptions; // Opsi tambahan untuk editor
  pages?: { name: string; component: string }[]; // Halaman tambahan
}

const StudioEditorBuilder: React.FC<StudioEditorBuilderProps> = ({
  options = {},
  pages = [{ name: 'Home', component: '<h1>Home page</h1>' }],
}) => {
  return (
    <StudioEditor
      options={{
        project: {
          type: 'web',
          default: {
            pages,
          },
        },
        plugins: [grapesJsTailwind, ...(options.plugins || [])],
        ...options,
      }}
    />
  );
};

// Gunakan dynamic untuk menghindari SSR
export default dynamic(() => Promise.resolve(StudioEditorBuilder), { ssr: false });

