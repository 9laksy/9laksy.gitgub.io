import History from '../pages/history.jsx';
import NotFoundPage from '../pages/404.jsx';
import InterestCalculator from '../pages/interest-calculator.jsx';

var routes = [
  {
    path: '/calculator/',
    component: InterestCalculator,
  },
  {
    path: '/catalog/',
    component: History
  },
  {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
