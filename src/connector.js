import { connect } from 'react-redux';
import App from './app';

const mapStateToProps = (state) => {
    return {
        isVisible: state.common.isSidebarVisible,
        name: 'Вася'
    };
};

export const appConnector = connect(mapStateToProps);