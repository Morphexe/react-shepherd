import HighlightOverlay from "./Overlay";
import PropTypes from "prop-types";
import React from "react";
import Shepherd from "tether-shepherd";

export const { Provider, Consumer } = React.createContext({});

class Guide extends React.Component {
  constructor(props) {
    super(props);
    this.tour = new Shepherd.Tour();
    this.tour.start();
    this.state = {
      targets: []
    };
  }

  render() {
    return (
      <React.Fragment>
        <Provider
          value={{
            className: this.props.className,
            tour: this.tour,
            next: () => {
              let nextStep = null;
              this.tour.steps.forEach(step => {
                if (
                  parseInt(step.id, 10) > parseInt(this.tour.currentStep.id, 10)
                ) {
                  if (
                    !nextStep ||
                    parseInt(nextStep.id, 10) > parseInt(step.id, 10)
                  )
                    nextStep = step;
                }
              });

              if (nextStep) this.tour.show(nextStep.id.toString());
              else {
                this.setState({ targets: [] });
                this.tour.hide();
              }
            },
            setOverlay: ta => this.setState({ targets: [ta] }),
            hideOverlay: ta => {
              this.setState({
                targets: this.state.targets.filter(x => x === ta)
              });
            }
          }}
        >
          {this.state.targets.length > 0 && (
            <HighlightOverlay targets={this.state.targets} />
          )}

          {this.props.children}
        </Provider>
      </React.Fragment>
    );
  }
}

export default Guide;

Guide.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string.isRequired
};
