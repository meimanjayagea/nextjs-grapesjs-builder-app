import StudioEditor from '@grapesjs/studio-sdk/react';
import 'grapesjs/dist/css/grapes.min.css';
import '@grapesjs/studio-sdk/style';
import grapesJsTailwind from 'grapesjs-tailwind';
import { config } from '@/utils/config';
import { ReactElement } from 'react';

export default function StudioEditorBuilder({projectType}:{projectType: boolean}) : ReactElement {

  // const configAssets = {
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

  return (
      <StudioEditor
          options={{
            licenseKey: process.env.LICENSE_KEY,
            identity: {
              id: process.env.UNIQUE_END_USER_ID,
            },
            project: {
              type: projectType ? 'web' : 'email',
              id: process.env.UNIQUE_PROJECT_ID,
              default : false
            },
            plugins: [
              grapesJsTailwind,
            ],
            devices: {
              default: config.configDivice,
            }
          }}
        />
  );
};




