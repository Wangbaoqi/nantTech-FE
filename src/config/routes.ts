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
    icon: IconOverview
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
    icon: DatabaseBackup
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
      }
    ]
  }
];

const css = [
  {
    name: 'CSS Snapshot',
    path: '/docs/css/snapshot',
    icon: Shell
  },
  {
    name: 'CSS Concepts',
    path: '/docs/css/concepts',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Introduction',
        collapsed: false,
        path: '/docs/css/concepts/intro'
      },
      {
        name: 'Media Types',
        collapsed: false,
        icon: '',
        path: '/docs/css/concepts/mediaType'
      },
      {
        name: 'Visual formatting model',
        collapsed: false,
        path: '/docs/css/concepts/vfm'
      },
      {
        name: 'Visual effects',
        collapsed: false,
        icon: '',
        path: '/docs/css/concepts/visualEffects'
      },
      {
        name: 'Page Media',
        collapsed: false,
        icon: '',
        path: '/docs/css/concepts/pageMedia'
      }
    ]
  },
  {
    name: 'CSS Modules - Official',
    path: '/docs/css/modules/official',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Syntax Level',
        collapsed: false,
        path: '/docs/css/modules/syntax'
      },
      {
        name: 'Style Attributes',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/styleAttributes'
      },
      {
        name: 'Media Queries Level',
        collapsed: false,
        path: '/docs/css/modules/mediaQueries'
      },
      {
        name: 'Conditional Rules Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/conditionalRules'
      },
      {
        name: 'Selectors Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/selectors'
      },
      {
        name: 'Namespaces',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/namespaces'
      },
      {
        name: 'Cascading and Inheritance Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/cascadingInheritance'
      },
      {
        name: 'Values and Units Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/valuesUnits'
      },
      {
        name: 'Box Model Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/boxModel'
      },
      {
        name: 'Color Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/color'
      },
      {
        name: 'Backgrounds and Borders ',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/backgroundsBorders'
      },
      {
        name: 'Images Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/images'
      },
      {
        name: 'Fonts Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/fonts'
      },
      {
        name: 'Writing Modes Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/writingModes'
      },
      {
        name: 'Multi-column Layout',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/multiColumn'
      },
      {
        name: 'Flexible Box Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/flex'
      },
      {
        name: 'User Interface Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/ui'
      },
      {
        name: 'Containment Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/containment'
      },
      {
        name: 'Transforms Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/transforms'
      },
      {
        name: 'Compositing and Blending Level ',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/compositing'
      },
      {
        name: 'Easing Functions Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/easing'
      },
      {
        name: 'Namespaces',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/namespaces'
      },
      {
        name: 'Counter Styles Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/counterStyles'
      }
    ]
  },
  {
    name: 'CSS Modules - Stable',
    path: '/docs/css/modules/stable',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Display Module Level',
        collapsed: false,
        path: '/docs/css/modules/displayModule'
      },
      {
        name: 'Fragmentation Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/fragmentation'
      },
      {
        name: 'Box Alignment Module Level',
        collapsed: false,
        path: '/docs/css/modules/mediaQueries'
      },
      {
        name: 'Shapes Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/shapes'
      },
      {
        name: 'Text Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/textModule'
      },
      {
        name: 'Text Decoration Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/textDecoration'
      },
      {
        name: 'Masking Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/masking'
      },
      {
        name: 'Scroll Snap Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/scrollSnap'
      },
      {
        name: 'Scrollbars StylingModule Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/scrollbars'
      },
      {
        name: 'View Transitions Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/viewTransitions'
      }
    ]
  },
  {
    name: 'CSS Modules - Rough',
    path: '/docs/css/modules/rough',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Transitions Level',
        collapsed: false,
        path: '/docs/css/modules/transitions'
      },
      {
        name: 'Grid Layout Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/grid'
      },
      {
        name: 'Will Change Level',
        collapsed: false,
        path: '/docs/css/modules/willChange'
      },
      {
        name: 'Filter Effects Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/filterEffects'
      },
      {
        name: 'Box Sizing Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/boxSizing'
      },
      {
        name: 'Lists and Counters Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/listCounters'
      },
      {
        name: 'Logical Properties and Values Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/logicalPropertiesValues'
      },
      {
        name: 'Positioned Layout Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/positionedLayout'
      },
      {
        name: 'Resize Observer',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/resizeObserver'
      },
      {
        name: 'Web Animations',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/webAnimations'
      },
      {
        name: 'Color Adjustment Module Level',
        collapsed: false,
        icon: '',
        path: '/docs/css/modules/colorAdjustment'
      }
    ]
  },
  {
    name: 'CSS Architecture',
    path: '/docs/css/architecture',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'OverView',
        collapsed: false,
        path: '/docs/css/architecture/overview'
      },
      {
        name: 'BEM',
        collapsed: false,
        path: '/docs/css/architecture/bem'
      },
      {
        name: 'OOCSS',
        collapsed: false,
        path: '/docs/css/architecture/oocss'
      },
      {
        name: 'SMACSS',
        collapsed: false,
        path: '/docs/css/architecture/smacss'
      },
      {
        name: 'AMCSS',
        collapsed: false,
        path: '/docs/css/architecture/amcss'
      },
      {
        name: 'CSSInJs',
        collapsed: false,
        path: '/docs/css/architecture/cssinjs'
      },
      {
        name: 'CSS Modules',
        collapsed: false,
        path: '/docs/css/architecture/modules'
      }
    ]
  },
  {
    name: 'CSS Preprocessors',
    path: '/docs/css/preprocessors',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Core Explained',
        collapsed: false,
        path: '/docs/css/preprocessors/core'
      },
      {
        name: 'Sass',
        collapsed: false,
        path: '/docs/css/preprocessors/sass'
      },
      {
        name: 'Less',
        collapsed: false,
        path: '/docs/css/preprocessors/less'
      },
      {
        name: 'Stylus',
        collapsed: false,
        path: '/docs/css/preprocessors/stylus'
      },
      {
        name: 'PostCSS',
        collapsed: false,
        path: '/docs/css/preprocessors/postcss'
      }
    ]
  },
  {
    name: 'CSS Framework',
    path: '/docs/css/framework',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'OverView',
        collapsed: false,
        path: '/docs/css/framework/overview'
      },
      {
        name: 'TailwindCSS',
        collapsed: false,
        path: '/docs/css/framework/tailwindcss'
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
  css
  // asyncPerformance,
  // reference
};
