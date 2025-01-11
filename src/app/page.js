'use client';
import { useState } from 'react';
// import StudioEditor from '@/components/EditorComponent';
import gjsTailwind from 'grapesjs-tailwind';
import StudioEditor from '@grapesjs/studio-sdk/react';
import '@grapesjs/studio-sdk/style';
import {configDivice} from '@/utils/configDivice'

export default function Home() {
  // const [editor, setEditor] = useState();
  const [projectType, setProjectType] = useState('web');

  const configStorege = {
    type: 'cloud',
    autosaveChanges: 100,
    autosaveIntervalMs: 10000
  }

  const ConfigAssets = {
    storageType: 'self',
    onUpload: async ({ files }) => {
      const body = new FormData();
      for (const file of files) {
        body.append('files', file);
      }
      const response = await fetch('ASSETS_UPLOAD_URL', { method: 'POST', body });
      const result = await response.json();
      return result;
    },
    onLoad: async () => {
      const response = await fetch('ASSETS_LOAD_URL');
      const result = await response.json();
      return [{ src: 'ASSET_URL' }, ...result];
    },

    onDelete: async ({ assets }) => {
      const body = JSON.stringify(assets);
      await fetch('ASSETS_DELETE_URL', { method: 'DELETE', body });
    }
  }

  return (
    <main className="flex h-screen flex-col justify-between p-5 gap-2">
      <div className="p-1 flex gap-5">
        <div className="font-bold">Builder APP</div>
        <button className="border rounded px-2" onClick={"getProjetData"}>
          Log Project Data
        </button>
        <button className="border rounded px-2" onClick={"getExportData"}>
          Log HTML/CSS
        </button>
        <button className="border rounded px-2" onClick={()=>setProjectType('email')}>
          Tipe Builder
        </button>
      </div>
      <div className="flex-1 w-full h-full overflow-hidden">
        <StudioEditor
          options={{
            licenseKey: process.env.LICENSE_KEY,
            identity: {
              id: process.env.UNIQUE_END_USER_ID,
            },
            assets: {...ConfigAssets},
            project: {
              type: projectType,
              id: process.env.UNIQUE_PROJECT_ID,
              default: {
                pages: [
                  { name: 'Home', component: '<h1>Home</h1>' }
                ]
              },
            },
            layout: {},
            templates: {},
            responsive: {},
            fromElement: true,
            storageManager: false,
            plugins: [
              gjsTailwind,
            ],
            globalStyles: {
              default: []
            },
            devices: {
              default : configDivice,
            }
            
          }}
        />
      </div>
    </main>
  );
}
