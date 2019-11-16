import { MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import StudentManagent from './elearnPages/StudentManagment';
import ResourceManagement from './elearnPages/ResourceManagement';
import AddStudentPage from './elearnPages/students/AddStudentPage';
import AddResourcePage from './elearnPages/resources/AddResourcePage';
import ToastComponent from './reusableComponents/ToastComponent';
import CategoryManagement from './elearnPages/CategoryManagement';
import AddCategoryPage from './elearnPages/categories/AddCategoryPage';

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));

const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <Switch>
          <MainLayout breakpoint={this.props.breakpoint}>
            <ToastComponent />

            <React.Suspense fallback={<PageSpinner />}>
              <Route exact path="/" component={DashboardPage} />
              <Route exact path="/invitations" component={StudentManagent} />
              <Route exact path="/resource" component={ResourceManagement} />
              <Route exact path="/categories" component={CategoryManagement} />
              <Route exact path="/add_student" component={AddStudentPage} />
              <Route exact path="/add_resource" component={AddResourcePage} />
              <Route exact path="/add_catrgory" component={AddCategoryPage} />
            </React.Suspense>
          </MainLayout>
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);

//https://github.com/reduction-admin/react-reduction.git
