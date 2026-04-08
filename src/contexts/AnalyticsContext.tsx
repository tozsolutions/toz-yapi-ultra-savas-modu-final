import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import ReactGA from 'react-ga4';

interface AnalyticsContextType {
  initialized: boolean;
  trackPageView: (path: string) => void;
  trackEvent: (category: string, action: string, label?: string, value?: number) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (!context) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: ReactNode;
  trackingId?: string;
}

export const AnalyticsProvider = ({ children, trackingId }: AnalyticsProviderProps) => {
  const [initialized, setInitialized] = useState(false);

  useEffect(() => {
    const gaId = trackingId || import.meta.env.VITE_GA_TRACKING_ID;

    if (gaId) {
      try {
        ReactGA.initialize(gaId, {
          gaOptions: {
            cookie_flags: 'SameSite=None;Secure',
          },
        });
        queueMicrotask(() => {
          setInitialized(true);
        });
        console.log('[Analytics] Google Analytics initialized');
      } catch (error) {
        console.error('[Analytics] Failed to initialize:', error);
      }
    } else {
      console.warn('[Analytics] No GA tracking ID provided');
    }
  }, [trackingId]);

  const trackPageView = (path: string) => {
    if (initialized) {
      ReactGA.send({ hitType: 'pageview', page: path });
    }
  };

  const trackEvent = (category: string, action: string, label?: string, value?: number) => {
    if (initialized) {
      ReactGA.event({
        category,
        action,
        label,
        value,
      });
    }
  };

  return (
    <AnalyticsContext.Provider value={{ initialized, trackPageView, trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
};
