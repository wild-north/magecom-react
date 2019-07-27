import { connect } from 'react-redux';
import { toggleSidebar, getUserInfo } from './actions';

export const appConnector = connect(state => ({
    isSidebarVisible: state.common.isSidebarVisible
}), {
    getUserInfo
});

export const headerConnector = connect(state => ({
    isOpened: state.common.isSidebarVisible
}), {
    toggleSidebar: () => toggleSidebar()
});