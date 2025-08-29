// Google Analytics configuration
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID || ''

// Log page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_TRACKING_ID, {
      page_location: url,
    })
  }
}

// Log specific events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label: string
  value?: number
}) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  event({
    action: 'click',
    category: 'social',
    label: platform,
  })
}

// Track contact clicks
export const trackContactClick = (method: string) => {
  event({
    action: 'click',
    category: 'contact',
    label: method,
  })
}

// Track experience clicks
export const trackExperienceClick = (company: string) => {
  event({
    action: 'click',
    category: 'experience',
    label: company,
  })
}

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event',
      targetId: string,
      config?: Record<string, any>
    ) => void
  }
}
