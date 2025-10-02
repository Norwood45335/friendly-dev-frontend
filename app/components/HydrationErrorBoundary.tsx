import { Component, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class HydrationErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    // Check if it's a hydration error
    if (error.message.includes('Hydration') || 
        error.message.includes('418') ||
        error.message.includes('Text content does not match server-rendered HTML')) {
      console.error('Hydration error caught:', error);
      return { hasError: true, error };
    }
    return { hasError: false };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    if (error.message.includes('Hydration') || error.message.includes('418')) {
      console.error('Hydration error details:', { error, errorInfo });
      
      // Log the component stack to help identify the problematic component
      console.error('Component stack:', errorInfo.componentStack);
    }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div className="p-4 bg-yellow-100 border border-yellow-400 rounded">
          <h2 className="text-lg font-semibold text-yellow-800">Hydration Error Detected</h2>
          <p className="text-yellow-700">
            There was a mismatch between server and client rendering. 
            Check the console for details.
          </p>
          <button 
            onClick={() => this.setState({ hasError: false })}
            className="mt-2 px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700"
          >
            Retry
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
