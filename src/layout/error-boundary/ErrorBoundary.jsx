import React from "react";
import GeneralLoading from "../general-loading/GeneralLoading";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <GeneralLoading text={`Something broke in your code.`} />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
