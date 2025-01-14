// import React from 'react';
// import dynamic from 'next/dynamic';
// import StudioEditor from '@grapesjs/studio-sdk/react';
// import '@grapesjs/studio-sdk/style';
// import grapesJsTailwind from 'grapesjs-tailwind';

// // Definisi tipe properti untuk komponen
// interface StudioEditorBuilderProps {}

// const StudioEditorBuilder: React.FC<StudioEditorBuilderProps> = () => {
//   return (
//     <StudioEditor
//       options={{
//         project: {
//           type: 'web',
//           default: {
//             pages: false
//           },
//         },
//         plugins: [grapesJsTailwind]
//       }}
//     />
//   );
// };

// // Gunakan dynamic untuk menghindari SSR
// export default dynamic(() => Promise.resolve(StudioEditorBuilder), { ssr: false });

