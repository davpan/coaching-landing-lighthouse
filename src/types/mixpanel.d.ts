interface Window {
  mixpanel: {
    track: (event_name: string, properties?: Record<string, any>) => void;
    init: (token: string, config?: any) => void;
  }
}
