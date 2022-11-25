import React from "react";
import GeneralLoading from "../general-loading/GeneralLoading";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <GeneralLoading text={`Frontend dev task ongoing: Due 11:59pm`} />;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
