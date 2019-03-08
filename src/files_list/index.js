import getData from './firebase_get_data';
import onClick from './onclick';
require('./style.scss');

export default {
  template: require('./template.html'),
  action() {
    getData({
      id: '/files/1',
      title: 'home'
    });
    onClick();
  }
}
