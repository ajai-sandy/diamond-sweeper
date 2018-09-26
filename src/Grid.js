import React, { Component, Fragment } from 'react';
import { diamond, arrow, question } from './assets';
import './Grid.css';

export default class Grid extends Component {
  constructor() {
    super();
    this.state = {
      pressed: false,
      isDiamond: false,
    };
    this._revealAnswer = this._revealAnswer.bind(this);
  }

  _revealAnswer() {
    const { row, col, diamondPositions } = this.props;
    if (
      diamondPositions.findIndex(pos => pos.row === row && pos.col === col) !==
      -1
    ) {
      this.setState({ isDiamond: true });
      this.props.removeDiamondFromArray();
    }
    this.setState({ pressed: true });
    this.props.decrementCounter();
  }
  render() {
    const { row, col } = this.props;
    const { pressed, isDiamond } = this.state;
    return (
      <Fragment>
        {!pressed && (
          <button
            className="button"
            id={`button-${row}${col}`}
            onClick={() => {
              this._revealAnswer();
            }}
          >
            <img
              src={question}
              className="images"
              alt="question"
              style={{ opacity: 0.4 }}
            />
          </button>
        )}
        {isDiamond && (
          <div className="display-value-diamond">
            <img src={diamond} className="images" alt="diamond" />
          </div>
        )}
      </Fragment>
    );
  }
}
