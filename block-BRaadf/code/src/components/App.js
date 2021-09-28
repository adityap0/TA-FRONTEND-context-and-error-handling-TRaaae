import React from "react";
import SwitchButton from "./Button";
import Header from "./Header";
import Main from "./Main";
import { DarkProvider } from "./DarkContext";


class App extends React.Component {
  state = {
    isDarkMode: false,
  };
  changeMode = () => {
    console.log(`yesss`);
    this.setState((state) => {
      return { isDarkMode: !state.isDarkMode };
    });
  };
  render() {
    let { isDarkMode } = this.state;
    return (
      <div className={`bg ${isDarkMode ? "bg-dark" : "bg-light"}`}>
        <DarkProvider value={{ isDarkMode, changeMode: this.changeMode }}>
          <Header isDarkMode={isDarkMode} />
          <Main isDarkMode={isDarkMode} />
          {/* <SwitchButton isDarkMode={isDarkMode} changeMode={this.changeMode} /> */}
          <SwitchButton />
        </DarkProvider>
      </div>
    );
  }
}

export default App;
