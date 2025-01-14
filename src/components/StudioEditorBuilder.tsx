import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import StudioEditor,{
  StudioCommands,
  ToastVariant,
} from '@grapesjs/studio-sdk/react';
import type { Editor } from 'grapesjs';
import '@grapesjs/studio-sdk/style';
import grapesJsTailwind from 'grapesjs-tailwind';

// Definisi tipe properti untuk komponen
interface StudioEditorBuilderProps {}

const StudioEditorBuilder: React.FC<StudioEditorBuilderProps> = () => {
  const [projectType, setProjectType] = useState<boolean>(true);
  const [editor, setEditor] = useState<Editor>();

    const onReady = (editor: Editor) => {
      console.log('Editor loaded', editor);
      setEditor(editor);
    };
  
    const showToast = (id: string) =>
      editor?.runCommand(StudioCommands.toastAdd, {
        id,
        header: 'Toast header',
        content: 'Data logged in console',
        variant: ToastVariant.Info,
      });
  
    const getProjetData = () => {
      if (editor) {
        console.log({ projectData: editor?.getProjectData() });
        showToast('log-project-data');
      }
    };
  
    const getExportData = () => {
      if (editor) {
        console.log({ html: editor?.getHtml(), css: editor?.getCss() });
        showToast('log-html-css');
      }
    };
  
    const getTailwindPlugin =()=>{
      if (editor) {
        console.log({ projectData: editor.runCommand('get-tailwindCss')});
        showToast('log-project-data');
      }
    }
  
    const getGlobalStyle =()=>{
      if (editor) {
        editor.runCommand('studio:layoutToggle', {
            id: 'gs',
            layout: 'panelGlobalStyles',
            header: { label: 'Global Styles' },
            placer: { type: 'absolute', position: 'right' }
          })
      }
    }

  return (
    <div className="flex h-screen flex-col justify-between pt-4">
      <div className="flex gap-5 items-center bg-black text-white p-1">
        <div className="font-bold"></div>
        <button className="border rounded px-1" onClick={getProjetData}>
          Log Project Data
        </button>
        <button className="border rounded px-1" onClick={getExportData}>
          Log HTML/CSS
        </button>
        <button className="border rounded px-1" onClick={getTailwindPlugin}>
          Tailwind
        </button>
        <button className="border rounded px-1" onClick={getGlobalStyle}>
          Global Style
        </button>
        <label className="inline-flex items-center cursor-pointer p-2" onClick={() => setProjectType(!projectType)}>
          <input type="checkbox" value='' className="sr-only peer"/>
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span className="ms-3 text-sm font-medium text-white dark:text-gray-300">{projectType ? 'web' : 'email'}</span>
        </label>
    </div>

    <div className="flex-1 w-full h-full overflow-hidden">
    <StudioEditor
      onReady={onReady}
      options={{
        project: {
          type:'web',
          default: {
            pages: false
          },
        },
        plugins: [
          grapesJsTailwind,
          editor => editor.onReady(() => {
              editor.runCommand('studio:get-tailwindCss');
          }),
        ]
      }}
    />
    </div>
  </div>
  );
};

// Gunakan dynamic untuk menghindari SSR
export default dynamic(() => Promise.resolve(StudioEditorBuilder), { ssr: false });

