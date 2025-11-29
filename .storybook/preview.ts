// import type { Preview } from '@storybook/react-vite';

// const preview: Preview = {
//   parameters: {
//     controls: {
//       matchers: {
//         color: /(background|color)$/i,
//         date: /Date$/i,
//       },
//     },

//     a11y: {
//       // 'todo' - show a11y violations in the test UI only
//       // 'error' - fail CI on a11y violations
//       // 'off' - skip a11y checks entirely
//       test: 'todo',
//     },
//   },
// };

// export default preview;
import type { Preview } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import React from 'react';

const preview: Preview = {
  decorators: [
    (Story) =>
      React.createElement(MemoryRouter, null, React.createElement(Story)),
  ],
};

export default preview;
