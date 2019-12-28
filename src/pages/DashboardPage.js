import Page from 'components/Page';

import React from 'react';

import { getColor } from 'utils/colors';
import { updateRawData } from '../actions';
import { DashboardCard } from './DashboardCard';
import { connect } from 'react-redux';
import { showToast } from '../helpers/toasts';
import { getCardItems } from './utils';

const today = new Date();

class DashboardPage extends React.Component {
  componentDidMount = async () => {
    const cardsForDashBoard = await getCardItems();
    updateRawData({ cardsForDashBoard: cardsForDashBoard });
  };
  onCardClicked = item => {
    const { goto } = item;
    if (goto) {
      this.props.history.push(goto);
    }
  };

  render() {
    const primaryColor = getColor('primary');
    const { cardsForDashBoard } = this.props;
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
        <div className="container">
          <div className="row">
            {cardsForDashBoard &&
              cardsForDashBoard.length > 0 &&
              cardsForDashBoard.map(cardItem => (
                <div key={cardItem.title} className="col-lg-3">
                  <DashboardCard item={cardItem} onClick={this.onCardClicked} />
                </div>
              ))}
          </div>
        </div>
      </Page>
    );
  }
}

export default connect(state => {
  const { cardsForDashBoard } = state.rawData;
  return { cardsForDashBoard };
})(DashboardPage);
