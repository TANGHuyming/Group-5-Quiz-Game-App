import React from 'react';
import { useNavigate } from 'react-router-dom';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback resetError={() => this.setState({ hasError: false, error: null })} />;
    }

    return this.props.children;
  }
}

function ErrorFallback({ resetError }) {
  const navigate = useNavigate();

  const handleReturnHome = () => {
    resetError();
    navigate('/', { replace: true });
  };

  return (
    <div className='error-card'>
        <div>
            <div>
                <h1>Oops! Something went wrong</h1>
                <p>
                    The game encountered an unexpected error. This usually happens when the page is refreshed during gameplay.
                </p>
            </div>
        
            <button onClick={handleReturnHome}>
                Return to Home
            </button>
        </div>
    </div>
  );
}

export default ErrorBoundary;