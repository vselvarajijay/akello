import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  /*
  tutorialSidebar: [
    {
      type: 'html',
      value: '<strong>Getting Started</strong>',
      className: 'sidebar-title',
    },
    'intro',    
    {
      type: 'html',
      value: '<strong>Core Workflows</strong>',
      className: 'sidebar-title',
    },
    {
      type: 'category',
      label: 'Authentication and Identity',
      items: [       
        'getting-started/population_health' 
      ],
    },
    {
      type: 'category',
      label: 'Authorization and Access Control',
      items: [        
        'getting-started/population_health' 
      ],
    },
    {
      type: 'category',
      label: 'Questionnaires',
      items: [   
        'getting-started/population_health'      
      ],
    },
    {
      type: 'category',
      label: 'Treat-to-Target',
      items: [        
        'getting-started/population_health' 
      ],
    },
    {
      type: 'category',
      label: 'Reimbursements',
      items: [  
        'getting-started/population_health'       
      ],
    },  
    {
      type: 'html',
      value: '<strong>Advanced</strong>',
      className: 'sidebar-title',
    }, 
    {
      type: 'category',
      label: 'Integrations',
      items: [  
        'getting-started/population_health'       
      ],
    },  
    {
      type: 'category',
      label: 'Analytics',
      items: [  
        'getting-started/population_health'       
      ],
    },  
    {
      type: 'category',
      label: 'Self-Hosting',
      items: [  
        'getting-started/population_health'       
      ],
    },  
    {
      type: 'category',
      label: 'Contributing',
      items: [  
        'getting-started/population_health'       
      ],
    },
    {
      type: 'category',
      label: 'Compliance',
      items: [  
        'getting-started/population_health'       
      ],
    },    
  ],
   */
  
};

export default sidebars;
