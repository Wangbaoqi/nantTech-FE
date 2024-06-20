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

const web = [
  {
    name: 'OverView',
    path: '/docs/web/overview',
    icon: Shell
  },
  {
    name: 'Browser Core',
    path: '/docs/web/browserCore',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Browser Workflow',
        collapsed: false,
        path: '/docs/web/browserCore/overview'
      },
      {
        name: 'Browser Architecture',
        collapsed: false,
        path: '/docs/web/browserCore/architecture'
      },
      {
        name: 'Browser Navigation',
        collapsed: false,
        icon: '',
        path: '/docs/web/browserCore/navigation'
      },
      {
        name: 'Browser Renderer',
        collapsed: false,
        path: '/docs/web/browserCore/renderer'
      },
      {
        name: 'Browser Compositor',
        collapsed: false,
        icon: '',
        path: '/docs/web/browserCore/compositor'
      }
    ]
  },
  {
    name: 'V8 Engine',
    path: '/docs/web/engine',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'JS Design Thought',
        collapsed: false,
        path: '/docs/web/engine/thought'
      },
      {
        name: 'Garbage collection',
        collapsed: false,
        icon: '',
        path: '/docs/web/engine/garbageCollect'
      },
      {
        name: 'V8 Basic Environment',
        collapsed: false,
        path: '/docs/web/engine/baseEnv'
      },
      {
        name: 'V8 Execution Process',
        collapsed: false,
        icon: '',
        path: '/docs/web/engine/executionProcess'
      },
      {
        name: 'V8 EventLoop',
        collapsed: false,
        icon: '',
        path: '/docs/web/engine/eventLoop'
      }
    ]
  },
  {
    name: 'Web Core APIs',
    path: '/docs/web/core',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'OverView',
        collapsed: false,
        path: '/docs/web/core/overview'
      },
      {
        name: 'URL',
        collapsed: false,
        path: '/docs/web/core/url'
      },
      {
        name: 'DOM',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/dom'
      },
      {
        name: 'Storage',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/storage'
      },
      {
        name: 'XMLHttpRequest',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/xhr'
      },
      {
        name: 'Encoding',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/encode'
      },
      {
        name: 'Fetch',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/fetch'
      },
      {
        name: 'File System',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/filesystem'
      },
      {
        name: 'Fullscreen',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/fullscreen'
      },
      {
        name: 'Web Components',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/webComponents'
      },
      {
        name: 'WebSockets',
        collapsed: false,
        icon: '',
        path: '/docs/web/core/websockets'
      }
    ]
  },
  {
    name: 'Web Platform Features',
    path: '/docs/web/platform',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Web Capabilities',
        collapsed: false,
        path: '/docs/web/platform/webFeatures'
      },
      {
        name: 'Experiment Web',
        collapsed: false,
        icon: '',
        path: '/docs/web/platform/experiment'
      }
    ]
  },
  {
    name: 'Web Performance',
    path: '/docs/web/performance',
    icon: Shell
  },
  {
    name: 'Web Testing',
    path: '/docs/web/testing',
    icon: Shell
  },
  {
    name: 'Web CSS-UI',
    path: '/docs/web/webCss',
    icon: Shell
  },
  {
    name: 'Web Baseline',
    path: '/docs/web/baseline',
    icon: Shell
  },
  {
    name: 'Responsive Design',
    path: '/docs/web/responsive',
    icon: Shell
  },
  {
    name: 'Efficiency Tools',
    path: '/docs/web/efficiencyTools',
    icon: Microscope,
    collapsed: false,
    items: [
      {
        name: 'Dev Tools',
        collapsed: false,
        path: '/docs/web/efficiencyTools/devTools'
      },
      {
        name: 'Lighthouse',
        collapsed: false,
        icon: '',
        path: '/docs/web/efficiencyTools/Lighthouse'
      },
      {
        name: 'UX Report',
        collapsed: false,
        path: '/docs/web/efficiencyTools/uxReport'
      },
      {
        name: 'PageSpeed',
        collapsed: false,
        icon: '',
        path: '/docs/web/efficiencyTools/pageSpeed'
      },
      {
        name: 'Workbox',
        collapsed: false,
        icon: '',
        path: '/docs/web/efficiencyTools/workbox'
      },
      {
        name: 'ChromeDriver',
        collapsed: false,
        icon: '',
        path: '/docs/web/efficiencyTools/chromeDriver'
      },
      {
        name: 'Puppeteer',
        collapsed: false,
        icon: '',
        path: '/docs/web/efficiencyTools/puppeteer'
      }
    ]
  },
  {
    name: 'Web Explore',
    path: '/docs/web/explore',
    icon: Shell,
    items: [
      {
        name: 'Web Accessibility',
        path: '/docs/web/explore/accessibility',
        icon: Shell
      },
      {
        name: 'WebAssembly',
        path: '/docs/web/explore/assembly',
        icon: Shell
      },
      {
        name: 'Modern PWA',
        path: '/docs/web/explore/pwa',
        icon: Shell
      },
      {
        name: 'Web Ai',
        path: '/docs/web/explore/ai',
        icon: Shell
      },
      {
        name: 'Web Network Reliability',
        path: '/docs/web/explore/network',
        icon: Shell
      },
      {
        name: 'Web Safe Security',
        path: '/docs/web/explore/safeSecure',
        icon: Shell
      },
      {
        name: 'Web Payments',
        path: '/docs/web/explore/payment',
        icon: Shell
      }
    ]
  }
];

const patterns = [
  {
    name: 'OverView',
    path: '/docs/patterns/overview',
    icon: Shell
  },
  {
    name: 'Design Patterns',
    path: '/docs/patterns/common',
    icon: Shell,
    items: [
      {
        name: 'Singleton Pattern',
        path: '/docs/patterns/common/singleton'
      },
      {
        name: 'Factory Pattern',
        path: '/docs/patterns/common/factory'
      },
      {
        name: 'Proxy Pattern',
        path: '/docs/patterns/common/proxy'
      },
      {
        name: 'Observer Pattern',
        path: '/docs/patterns/common/observer'
      },
      {
        name: 'Prototype Pattern',
        path: '/docs/patterns/common/prototype'
      },
      {
        name: 'Command Pattern',
        path: '/docs/patterns/common/command'
      },
      {
        name: 'Flyweight Pattern',
        path: '/docs/patterns/common/flyweight'
      },
      {
        name: 'Module Pattern',
        path: '/docs/patterns/common/module'
      }
    ]
  },
  {
    name: 'React Patterns',
    path: '/docs/patterns/react',
    icon: Shell,
    items: [
      {
        name: 'Container/Presentational Pattern',
        path: '/docs/patterns/react/conPre'
      },
      {
        name: 'Hooks Pattern',
        path: '/docs/patterns/react/hooks'
      },
      {
        name: 'Render Props Pattern',
        path: '/docs/patterns/react/renderProps'
      },
      {
        name: 'Static Rendering',
        path: '/docs/patterns/react/staticRender'
      },
      {
        name: 'Client-side Rendering',
        path: '/docs/patterns/react/client'
      },
      {
        name: 'Server-side Rendering',
        path: '/docs/patterns/react/prototype'
      },
      {
        name: 'Streaming Server-Side Rendering',
        path: '/docs/patterns/react/streamSsr'
      },
      {
        name: 'Incremental Static Generation',
        path: '/docs/patterns/react/incrementalStatic'
      },
      {
        name: 'Progressive Hydration',
        path: '/docs/patterns/react/pwaHydration'
      },
      {
        name: 'Selective Hydration',
        path: '/docs/patterns/react/selectiveHydration'
      },
      {
        name: 'React Server Components',
        path: '/docs/patterns/react/rsc'
      }
    ]
  },
  {
    name: 'Performance Patterns',
    path: '/docs/patterns/performance',
    icon: Shell,
    items: [
      {
        name: 'Bundle Splitting',
        path: '/docs/patterns/performance/bundleSplit'
      },
      {
        name: 'Compressing JavaScript',
        path: '/docs/patterns/performance/compressJs'
      },
      {
        name: 'Dynamic Import',
        path: '/docs/patterns/performance/dynamicImport'
      },
      {
        name: 'Import On Interaction',
        path: '/docs/patterns/performance/importOnInteraction'
      },
      {
        name: 'Import On Visibility',
        path: '/docs/patterns/performance/importOnVisibility'
      },
      {
        name: 'Optimize your loading sequence',
        path: '/docs/patterns/performance/optimizeLoading'
      },
      {
        name: 'Prefetch',
        path: '/docs/patterns/performance/prefetch'
      },
      {
        name: 'Preload',
        path: '/docs/patterns/performance/preload'
      },
      {
        name: 'PRPL Pattern',
        path: '/docs/patterns/performance/prpl'
      },
      {
        name: 'Optimize loading third-parties',
        path: '/docs/patterns/performance/optimizeThirdParty'
      },
      {
        name: 'Tree Shaking',
        path: '/docs/patterns/react/treeShaking'
      },
      {
        name: 'List Virtualization',
        path: '/docs/patterns/react/listVirtualization'
      }
    ]
  }
];

const network = [
  {
    name: 'Networking Basic',
    path: '/docs/network/basic',
    icon: IconOverview
  },
  {
    name: 'Network Devices',
    path: '/docs/network/devices',
    icon: IconOverview
  },
  {
    name: 'Network Operating Systems',
    path: '/docs/network/operatingSystem',
    icon: IconOverview
  },
  {
    name: 'Data transmission Techniques',
    path: '/docs/network/transmission',
    icon: IconOverview
  },
  {
    name: 'Networking Protocols',
    path: '/docs/network/protocols',
    icon: IconOverview
  },

  {
    name: 'HTTP Protocol',
    path: '/docs/network/http',
    icon: IconOverview,
    collapsed: false,
    items: [
      {
        name: 'HTTP Basics',
        path: '/docs/network/http/basics'
      },
      {
        name: 'HTTP Headers',
        path: '/docs/network/http/headers'
      },
      {
        name: 'HTTP Cookies and Session',
        path: '/docs/network/http/cookiesSession'
      },
      {
        name: 'HTTP Caching',
        path: '/docs/network/http/cache'
      },
      {
        name: 'HTTP Authentication',
        path: '/docs/network/http/auth'
      },
      {
        name: 'HTTP RESTful',
        path: '/docs/network/http/rest'
      },
      {
        name: 'Introduction HTTP2',
        path: '/docs/network/http/http2'
      },
      {
        name: 'HTTP Security',
        path: '/docs/network/http/security'
      },
      {
        name: 'HTTP Connection Management',
        path: '/docs/network/http/connection'
      },
      {
        name: 'HTTP Proxies',
        path: '/docs/network/http/proxy'
      }
    ]
  },
  {
    name: 'Network Security',
    path: '/docs/network/security',
    icon: IconOverview
  },
  {
    name: 'Wireless Networking',
    path: '/docs/network/wireless',
    icon: IconOverview
  },
  {
    name: 'Network Design',
    path: '/docs/network/design',
    icon: IconOverview
  },
  {
    name: 'Network Tools',
    path: '/docs/network/tools',
    icon: IconOverview
  },
  {
    name: 'Advanced Networking Concepts',
    path: '/docs/network/advancedConcepts',
    icon: IconOverview
  },
  {
    name: 'Cloud Networking',
    path: '/docs/network/cloud',
    icon: IconOverview
  }
];

export const sourceRoutes: sourceRoutesType = {
  html,
  css,
  web,
  patterns,
  network
};
