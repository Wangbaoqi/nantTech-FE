import { IconNotepadDash, IconReact, IconComponent } from '@/components/icons/';

import {
  Castle as IconOverview,
  Glasses as IconGlasses,
  DatabaseBackup,
  ArrowDown01,
  GitCompare,
  Shell,
  Microscope
} from 'lucide-react';
export type sourceRoutesType = {
  [key: string]: sourceRoutesItemType[];
};

export type sourceRoutesItemType = {
  title?: string;
  name?: string;
  path: string;
  collapsed?: boolean;
  icon?: any;
  items?: sourceRoutesItemType[];
};

const html = [
  {
    name: 'Basic Concepts',
    path: '/docs/html/concepts',
    icon: IconOverview,
  },
  {
    name: 'Elements',
    path: '/docs/html/elements',
    icon: DatabaseBackup,
    collapsed: false,
    items: [
      {
        name: 'Text Content',
        path: '/docs/html/elements/textContent'
      },
      {
        name: 'Inline Text Semantics',
        path: '/docs/html/elements/inlineText'
      },
      {
        name: 'Image and Multimedia',
        path: '/docs/html/elements/imageMulti'
      },
      {
        name: 'Tables',
        path: '/docs/html/elements/table'
      },
      {
        name: 'Scripting',
        path: '/docs/html/elements/scripting'
      }
    ]
  },
  {
    name: 'Attributes',
    path: '/docs/html/attributes',
    icon: DatabaseBackup,
    collapsed: false,
    items: [
      {
        name: 'Global Attributes',
        path: '/docs/html/attributes/globalAttributes'
      },
      {
        name: 'Event Attributes',
        path: '/docs/html/attributes/eventAttributes'
      }
    ]
  },
  {
    name: 'Semantics HTML',
    path: '/docs/html/semanticsHTML',
    icon: DatabaseBackup,
  },
  {
    name: 'HTML5 New Features',
    path: '/docs/html/features',
    icon: DatabaseBackup,
    collapsed: false,
    items: [
      {
        name: 'New Elements',
        path: '/docs/html/features/elements'
      },
      {
        name: 'Form Enhancements',
        path: '/docs/html/features/form'
      },
      {
        name: 'APIs',
        path: '/docs/html/features/apis'
      },
      {
        name: 'Canvas',
        path: '/docs/html/features/canvas'
      },
      {
        name: 'Web Storage',
        path: '/docs/html/features/storage'
      },
      {
        name: 'Web Workers',
        path: '/docs/html/features/webWorkers'
      },
      {
        name: 'Web Sockets',
        path: '/docs/html/features/webSockets'
      }
    ]
  },
  {
    name: 'Best Practices',
    path: '/docs/html/practices',
    icon: DatabaseBackup,
    collapsed: false,
    items: [
      {
        name: 'Accessibility',
        path: '/docs/html/practices/accessibility'
      },
      {
        name: 'SEO',
        path: '/docs/html/practices/seo'
      },
      {
        name: 'Performance',
        path: '/docs/html/practices/performance'
      },
      {
        name: 'Security',
        path: '/docs/html/practices/security'
      },
    ]
  },
];

const css = [
  {
    name: 'Iteration',
    path: '/docs/asyncPerformance/iteration',
    icon: Shell
  },
  {
    name: 'Promise',
    path: '/docs/asyncPerformance/promise',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Promise Execute',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/promiseExecute'
      },
      {
        name: 'Promise Abstract Operation',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/promiseOperations'
      },
      {
        name: 'Promise Constructor',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/promiseConstructor'
      },
      {
        name: 'Promise Job',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/promiseJob'
      },
      {
        name: 'Property Promise Constructor',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/propertyPromiseConstructor'
      },
      {
        name: 'Property Promise Prototype',
        collapsed: false,
        icon: '',
        path: '/docs/asyncPerformance/promise/propertyPromisePrototype'
      }
    ]
  }
];

const reference = [
  {
    name: 'Global Object',
    path: '/docs/reference/global/value',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Global Value',
        path: '/docs/reference/global/value'
      },
      {
        name: 'Global Function',
        path: '/docs/reference/global/function'
      },
      {
        name: 'Global Constructor',
        path: '/docs/reference/global/constructor'
      },
      {
        name: 'Global Other',
        path: '/docs/reference/global/other'
      }
    ]
  },
  {
    name: 'Fundamental Object',
    path: '/docs/reference/fundamental',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Object Objects',
        path: '/docs/reference/fundamental/object'
      },
      {
        name: 'Function Objects',
        path: '/docs/reference/fundamental/function'
      },
      {
        name: 'Boolean Objects',
        path: '/docs/reference/fundamental/boolean'
      },
      {
        name: 'Symbol Objects',
        path: '/docs/reference/fundamental/symbol'
      },
      {
        name: 'Error Objects',
        path: '/docs/reference/fundamental/error'
      }
    ]
  },
  {
    name: 'Numbers Dates',
    path: '/docs/reference/numbers',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Number Objects',
        path: '/docs/reference/numbers/number'
      },
      {
        name: 'Bigint Objects',
        path: '/docs/reference/numbers/bigint'
      },
      {
        name: 'Math Objects',
        path: '/docs/reference/numbers/math'
      },
      {
        name: 'Date Objects',
        path: '/docs/reference/numbers/date'
      }
    ]
  },
  {
    name: 'Text Processing',
    path: '/docs/reference/text',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'String Objects',
        path: '/docs/reference/text/string'
      },
      {
        name: 'RegExp Objects',
        path: '/docs/reference/text/regexp'
      }
    ]
  },
  {
    name: 'Indexed Collections',
    path: '/docs/reference/indexed',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Array Objects',
        path: '/docs/reference/indexed/array'
      },
      {
        name: 'TypedArray Objects',
        path: '/docs/reference/indexed/typedArray'
      }
    ]
  },
  {
    name: 'Keyed Collections',
    path: '/docs/reference/keyed',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Map Objects',
        path: '/docs/reference/keyed/map'
      },
      {
        name: 'Set Objects',
        path: '/docs/reference/keyed/set'
      },
      {
        name: 'Weakmap Objects',
        path: '/docs/reference/keyed/weakmap'
      },
      {
        name: 'Weakset Objects',
        path: '/docs/reference/keyed/weakset'
      }
    ]
  },
  {
    name: 'Structured Data',
    path: '/docs/reference/structured',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'ArrayBuffer Objects',
        path: '/docs/reference/structured/arrayBuffer'
      },
      {
        name: 'SharedArrayBuffer Objects',
        path: '/docs/reference/structured/sharedArrayBuffer'
      },
      {
        name: 'DataView Objects',
        path: '/docs/reference/structured/dataView'
      },
      {
        name: 'Atomic Objects',
        path: '/docs/reference/structured/atomic'
      },
      {
        name: 'JSON Objects',
        path: '/docs/reference/structured/json'
      }
    ]
  },
  {
    name: 'Control Abstraction Object',
    path: '/docs/reference/control',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Iteration Objects',
        path: '/docs/reference/control/iteration'
      },
      {
        name: 'Promise Objects',
        path: '/docs/reference/control/promise'
      },
      {
        name: 'GeneratorFunction Objects',
        path: '/docs/reference/control/generatorFunction'
      },
      {
        name: 'AsyncGeneratorFunction Objects',
        path: '/docs/reference/control/asyncGeneratorFunction'
      },
      {
        name: 'Generator Object',
        path: '/docs/reference/control/generatorObject'
      },
      {
        name: 'AsyncGenerator Object',
        path: '/docs/reference/control/asyncGeneratorObject'
      },
      {
        name: 'AsyncFunction Object',
        path: '/docs/reference/control/asyncFunction'
      }
    ]
  },
  {
    name: 'Reflection',
    path: '/docs/reference/reflection',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'Reflect Objects',
        path: '/docs/reference/reflection/reflect'
      },
      {
        name: 'Proxy Objects',
        path: '/docs/reference/reflection/proxy'
      },
      {
        name: 'Module Namespace Objects',
        path: '/docs/reference/reflection/namespace'
      }
    ]
  }
];

export const sourceRoutes: sourceRoutesType = {
  html,
  // asyncPerformance,
  // reference
};
