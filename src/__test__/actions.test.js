import { mockStore } from '../utils/mockStore';
import { getWeatherByCityName } from '../actions';
import {
    WEATHER_REQUEST,
    WEATHER_SUCCESS,
    WEATHER_FAILURE
} from '../actions/constants';

describe("Testing async functions", () => {
    it("should process cod 200", async () => {
        const dispatch = jest.fn();
        const getState = jest.fn();

        jest.spyOn(global, 'fetch').mockImplementation(() => (
            Promise.resolve({
                json: () => Promise.resolve({
                    cod: 200
                })
            })
        ));

        // тут мы вызываем наш реальный thunk-экшен
        await getWeatherByCityName("Test", {})(dispatch, getState);

        expect(global.fetch).toHaveBeenCalledTimes(1);
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toBeCalledWith({type: WEATHER_REQUEST});
        expect(dispatch).toBeCalledWith({type: WEATHER_SUCCESS, payload: { cod: 200 }});
    });

    it("should process cod 404", async () => {
        const dispatch = jest.fn();
        const getState = jest.fn();

        jest.spyOn(global, 'fetch').mockImplementation(() => (
            Promise.resolve({json: () => Promise.resolve({ cod: 404, message: 'AAAAAA' })})
        ));

        // тут мы вызываем наш реальный thunk-экшен
        await getWeatherByCityName("Test", {})(dispatch, getState);

        expect(global.fetch).toHaveBeenCalledTimes(2);
        expect(dispatch).toHaveBeenCalledTimes(2);

        expect(dispatch).toBeCalledWith({type: WEATHER_REQUEST});
        expect(dispatch).toBeCalledWith({type: WEATHER_FAILURE, payload: 'AAAAAA'});
    });
});
