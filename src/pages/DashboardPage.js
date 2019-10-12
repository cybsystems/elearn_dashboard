import Page from 'components/Page';
  
import React from 'react';

import { getColor } from 'utils/colors';

const today = new Date();
 

class DashboardPage extends React.Component {
  componentDidMount() {
    // this is needed, because InfiniteCalendar forces window scroll
    window.scrollTo(0, 0);
  }

  render() {
    const primaryColor = getColor('primary');
 
    return (
      <Page
        className="DashboardPage"
        title="Dashboard"
        breadcrumbs={[{ name: 'Dashboard', active: true }]}
      >
       
      </Page>
    );
  }
}
export default DashboardPage;
