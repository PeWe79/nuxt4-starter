import { createSharedComposable } from '@vueuse/core'

function _useHeaderLinks() {
  const route = useRoute()

  const headerLinks = computed(() => {
    return [
      {
        label: 'About',
        icon: 'i-lucide-library',
        to: '/about',
        active: route.path.startsWith('/about'),
      },
      {
        label: 'Docs',
        icon: 'i-lucide-book-marked',
        to: '/docs',
        search: false,
        active:
          route.path.startsWith('/docs') ||
          route.path.startsWith('/getting-started') ||
          route.path.startsWith('/guide') ||
          route.path.startsWith('/api') ||
          route.path.startsWith('/examples') ||
          route.path.startsWith('/community'),
        children: [
          {
            label: 'Get Started',
            description: 'Learn how to get started with Nuxt to build your first app.',
            icon: 'i-lucide-rocket',
            to: '/getting-started',
          },
          {
            label: 'Guide',
            description: 'Get the key concepts, directory structure and best practices.',
            icon: 'i-lucide-book-open',
            to: '/guide',
          },
          {
            label: 'API',
            description: 'Explore the Nuxt components, composables, utilities and more.',
            icon: 'i-lucide-code-xml',
            to: '/api',
          },
          {
            label: 'Examples',
            description: 'Discover and explore official and community examples.',
            icon: 'i-lucide-app-window-mac',
            to: '/examples',
          },
          {
            label: 'Community',
            description: 'Find answers and support from the community.',
            icon: 'i-lucide-messages-square',
            to: '/community',
          },
        ],
      },
      {
        label: 'Resources',
        icon: 'i-lucide-library',
        to: '/templates',
        search: false,
        active:
          route.path.startsWith('/templates') ||
          route.path.startsWith('/video-courses') ||
          route.path.startsWith('/showcase'),
        children: [
          {
            label: 'Templates',
            icon: 'i-lucide-app-window',
            description: 'Start your next project with a Nuxt template.',
            to: '/templates',
          },
          {
            label: 'Video Courses',
            description: 'Learn Nuxt by watching video courses.',
            icon: 'i-lucide-graduation-cap',
            to: '/video-courses',
          },
          {
            label: 'Showcase',
            description: 'Discover and explore projects built with Nuxt.',
            icon: 'i-lucide-presentation',
            to: '/showcase',
          },
          {
            label: 'Nuxt Certification',
            description: 'Obtain your Certification of Competence.',
            icon: 'i-lucide-medal',
            to: 'https://certification.nuxt.com',
            target: '_blank',
          },
        ],
      },
      {
        label: 'Blog',
        icon: 'i-lucide-newspaper',
        to: '/blog',
      },
    ]
  })

  return { headerLinks }
}

export const useHeaderLinks = import.meta.client ? createSharedComposable(_useHeaderLinks) : _useHeaderLinks

const footerLinks = [
  {
    label: 'Community',
    children: [
      {
        label: 'Nuxters',
        to: 'https://nuxters.nuxt.com',
        target: '_blank',
      },
      {
        label: 'Team',
        to: '/team',
      },
      {
        label: 'Design Kit',
        to: '/design-kit',
      },
    ],
  },
  {
    label: 'Products',
    children: [
      {
        label: 'Nuxt UI Pro',
        to: 'https://ui.nuxt.com/pro?utm_source=nuxt-website&utm_medium=footer',
        target: '_blank',
      },
      {
        label: 'Nuxt Studio',
        to: 'https://content.nuxt.com/studio/?utm_source=nuxt-website&utm_medium=footer',
        target: '_blank',
      },
      {
        label: 'NuxtHub',
        to: 'https://hub.nuxt.com/?utm_source=nuxt-website&utm_medium=footer',
        target: '_blank',
      },
    ],
  },
  {
    label: 'Enterprise',
    children: [
      {
        label: 'Support',
        to: '/enterprise/support',
      },
      {
        label: 'Agencies',
        to: '/enterprise/agencies',
      },
      {
        label: 'Sponsors',
        to: '/enterprise/sponsors',
      },
    ],
  },
]

export const useFooterLinks = () => ({ footerLinks })

const _useNavigation = () => {
  const { headerLinks } = useHeaderLinks()
  const { footerLinks } = useFooterLinks()

  return {
    headerLinks,
    footerLinks,
  }
}

export const useNavigation = import.meta.client ? createSharedComposable(_useNavigation) : _useNavigation
