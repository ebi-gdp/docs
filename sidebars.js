/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

module.exports = {
  sidebar: [
    'about',
    'gettingstarted',
    {
      type: 'category',
      label: 'How-to',
      collapsed: true,
      link: {
        type: 'generated-index',
        description: "Get things done on the platform",
       },
      items: [
        'how-to/data',
        'how-to/scores',
        {
          type: 'category',
          label: 'Encrypt', // Subcategory under Tutorials
          collapsed: true,
          link: {
            type: 'generated-index',
            description: "Guides to encrypting sensitive data."
          },
          items: [
            'how-to/encrypt/cli',
            'how-to/encrypt/gui',
          ],
        },
        {
          type: 'category',
          label: 'Upload', // Subcategory under Tutorials
          collapsed: true,
          link: {
            type: 'generated-index',
            description: "Guides to safely uploading sensitive data."
          },
          items: [
            'how-to/upload/gcp',
            'how-to/upload/web',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Explain',
      collapsed: true,
      link: {
        type: 'generated-index',
        description: "Understand the platform and its outputs."
      },
      items: [
        'explain/usecase',
        'explain/datarequirements',
        'explain/encryption',
        'explain/exitcodes',
        'explain/report',
      ],
    },
    {
      type: 'category',
      label: 'Data governance and security',
      collapsed: true,
      link: {
        type: 'generated-index',
        description: "How we process your data and keep it safe.",
      },
      items: [
        'data/processing',
        'data/dpa',
        'data/security',
      ],
    },
    'tools'
  ]
};