'use client';
// import StudioEditorBuilder from '@/components/studioeditorbuilder'
import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
// import StudioEditor from '@grapesjs/studio-sdk/react';
import type { Editor } from 'grapesjs';
import StudioEditor, {
  StudioCommands,
  ToastVariant,
} from '@grapesjs/studio-sdk/react';
// const StudioEditor = dynamic(() => import('@grapesjs/studio-sdk/react'), {ssr: false});
import '@grapesjs/studio-sdk/style';

import grapesJsTailwind from 'grapesjs-tailwind';

export default function Home() {
  const [projectType, setProjectType] = useState<boolean>(false);
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>Builder APP</CardTitle>
        <CardDescription>Create a new project to build a website or homepage application.</CardDescription>
          <div className="flex h-screen flex-col justify-between p-5 gap-2">
            <div className="flex gap-5 items-center">
              <div className="font-bold"></div>
              <button className="border rounded px-2" onClick={getProjetData}>
                Log Project Data
              </button>
              <button className="border rounded px-2" onClick={getExportData}>
                Log HTML/CSS
              </button>
              <button className="border rounded px-2" onClick={getTailwindPlugin}>
                Tailwind
              </button>
              <label className="inline-flex items-center cursor-pointer p-2">
                <input type="checkbox" value='' className="sr-only peer" />
                <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">{projectType ? 'web' : 'email'}</span>
              </label>
          </div>

          <div className="flex-1 w-full h-full overflow-hidden">
          <StudioEditor
            onReady={onReady}
            options={{
              project: {
                type: 'web',
                default: {
                  pages: false
                },
              },
              plugins: [
                grapesJsTailwind,
                editor => editor.onReady(() => {
                    editor.runCommand('get-tailwindCss');
                })
              ]
            }}
          />
          </div>
        </div>
      </CardHeader>
      <CardContent />
    </Card>
  );
}
