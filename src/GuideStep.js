import { compose, lifecycle, withState } from "recompose";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { Consumer } from "./Guide";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  border-radius: 10px;
  padding: 5%;
  transition: all 0.4s ease-in;
  background-color: ${props =>
    props.overlay && props.visible ? "rgba(0, 0, 0, 0.8)" : "transparent"};
`;

function randomClassName() {
  return Math.random()
    .toString(36)
    .replace(/[^a-z]+/g, "")
    .substr(2, 10);
}

const InternalStepWrapper = ({ uniqueId, visible }) => (
  <Overlay visible={visible} className={uniqueId} />
);

const Wrapped = compose(
  withState("visible", "setVisible", false),
  lifecycle({
    componentWillMount() {
      const id = randomClassName();
      this.setState({ uniqueId: id });
      this.step = this.props.context.tour.addStep({
        id: this.props.order.toString(),
        title: this.props.title || "",
        text: this.props.text || "NO text  was passed",
        attachTo: `.${id} ${this.props.position || "middle"}`,
        classes: this.context.className,
        beforeShowPromise: () => {
          this.props.setVisible(true);
          this.props.context.setOverlay(`.${id}`);
          return Promise.resolve();
        },
        buttons: [
          {
            text: "Next",
            action: () => {
              this.props.context.hideOverlay(`.${id}`);

              this.props.context.next();
              this.props.setVisible(false);
            }
          }
        ]
      });
      if (this.props.show) {
        this.props.setVisible(true);
        this.step.show();
      }
    }
  })
)(InternalStepWrapper);

InternalStepWrapper.propTypes = {
  uniqueId: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired
};

const Step = props => (
  <Consumer>
    {context => (
      <React.Fragment>
        <Wrapped context={context} {...props} />
        {props.children}
      </React.Fragment>
    )}
  </Consumer>
);

Step.propTypes = {
  children: PropTypes.node,
  uniqueId: PropTypes.string.isRequired,
  setVisible: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  order: PropTypes.number.isRequired
};

Step.defaultProps = {
  children: null
};

export default Step;
