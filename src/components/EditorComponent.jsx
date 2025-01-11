import dynamic from 'next/dynamic';
import '@grapesjs/studio-sdk/style';
import gjsTailwind from 'grapesjs-tailwind';
import { useState } from 'react';
import StudioEditor from '@grapesjs/studio-sdk/react';

const EditorComponent = () => {
  const [editorReady, setEditorReady] = useState(false); // Status editor
  const [isTailwindPanelOpen, setIsTailwindPanelOpen] = useState(false); // Status panel Tailwind
  const [htmlContent, setHtmlContent] = useState(''); // Konten HTML dari editor

  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Tombol untuk kontrol tambahan */}

      {/* GrapesJS Studio Editor */}
      <StudioEditor
        options={{
          layout: {
            default: {
              type: 'row',
              height: '100%',
              children: [
                {
                  type: 'canvasSidebarTop',
                  sidebarTop: {
                    leftContainer: {
                      buttons: ({ items }) => [
                        ...items,
                        {
                          id: 'openTemplatesButtonId',
                          size: 'm',
                          icon: '<svg viewBox="0 0 24 24"><path d="M20 14H6C3.8 14 2 15.8 2 18S3.8 22 6 22H20C21.1 22 22 21.1 22 20V16C22 14.9 21.1 14 20 14M6 20C4.9 20 4 19.1 4 18S4.9 16 6 16 8 16.9 8 18 7.1 20 6 20M6.3 12L13 5.3C13.8 4.5 15 4.5 15.8 5.3L18.6 8.1C19.4 8.9 19.4 10.1 18.6 10.9L17.7 12H6.3M2 13.5V4C2 2.9 2.9 2 4 2H8C9.1 2 10 2.9 10 4V5.5L2 13.5Z" /></svg>',
                          onClick: ({ editor }) => {
                            editor.runCommand('studio:layoutToggle', {
                              id: 'my-templates-panel',
                              header: false,
                              placer: { type: 'dialog', title: 'Choose a template for your project', size: 'l' },
                              layout: {
                                type: 'panelTemplates',
                                content: { itemsPerRow: 3 },
                                onSelect: ({ loadTemplate, template }) => {
                                  // Load the selected template to the current project
                                  loadTemplate(template);
                                  // Close the dialog layout
                                  editor.runCommand('studio:layoutRemove', { id: 'my-templates-panel' })
                                }
                              }
                            });
                          }
                        },
                        {
                          id: 'tailwind-settings',
                          label: 'Tailwind',
                          onClick: ({ editor }) => {
                            // Toggle Tailwind Panel
                            setIsTailwindPanelOpen(prev => !prev);
                            editor.runCommand('studio:grapesjs-tailwind', {
                              id: 'tailwind-panel',
                              layout: 'panelGlobalStyles',
                              header: { label: 'Tailwind Settings' },
                              placer: { type: 'dialog', title: 'Configure Tailwind', size: 'm' },
                            });
                          },
                        },
                      ],
                    },
                  },
                  grow: true,
                },
                { type: 'sidebarRight' },
              ],
            },
          },
          plugins: [
            gjsTailwind, // Plugin Tailwind
            editor => {
              editor.onReady(() => {
                setEditorReady(true); // Update status ketika editor siap
                editor.runCommand('studio:grapesjs-tailwind', {
                  id: 'tailwind-panel',
                  header: { label: 'Global Styles' },
                  placer: { type: 'absolute', position: 'right' },
                });

                // Simpan konten HTML editor setiap kali ada perubahan
                editor.on('update', () => {
                  const html = editor.getHtml();
                  setHtmlContent(html);
                });
              });
            },
          ],
          pluginsOpts: {
            tailwindPlugin: {
              theme: {
                extend: {
                  colors: {
                    customBlue: "#1e3a8a",
                    customGreen: "#10b981",
                  },
                },
              },
            },
          },
        }}
      />
    </div>
  );
};

export default dynamic(() => Promise.resolve(EditorComponent), { ssr: false });




