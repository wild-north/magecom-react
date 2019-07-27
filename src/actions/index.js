import * as ct from './constants';
import { createAction } from '../helpers/actions';

export const toggleSidebar = createAction(ct.SIDEBAR_TOGGLE);

export const requestUserInfo = createAction(ct.USER_INFO_REQUEST);
export const resolveUserInfo = createAction(ct.USER_INFO_SUCCESS);
export const rejectUserInfo = createAction(ct.USER_INFO_FAILURE);



export const getUserInfo = () => dispatch => {
    dispatch(requestUserInfo());

    new Promise((res, rej) => {
        setTimeout(() => {
            Math.random() > .5
                ? res(dispatch(resolveUserInfo(true)))
                : rej(dispatch(rejectUserInfo(false)));
        }, 2000);
    })

    // fetch('http://asda.sd')
    //     .then((data) => {
    //         dispatch(resolveUserInfo(data));
    //     }, (err) => {
    //         dispatch(rejectUserInfo(err));
    //     });

};
