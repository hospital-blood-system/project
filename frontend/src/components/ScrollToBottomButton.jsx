import React from "react";

class ScrollToBottomButton extends React.Component {
  scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    return (
      <a href="#" className="custom-button" onClick={this.scrollToBottom}>
        İletişim
      </a>
    );
  }
}

export default ScrollToBottomButton;