import { CHANGE_NAV_STATE, FETCH_CITY_REQUEST, FETCH_CITY_SUCCESS, FETCH_CITY_FAILURE, FETCH_WEATHER_REQUEST, FETCH_WEATHER_SUCCESS, FETCH_WEATHER_FAILURE } from '../actions'

export const isNavOpen = (state = false, action) => {
    switch(action.type) {
        case CHANGE_NAV_STATE:
            return action.isNavOpen
        default:
            return state;
    }
}

export const city = (state = '', action) => {
    switch(action.type) {
        case FETCH_CITY_SUCCESS:
            return action.city;
        case FETCH_CITY_REQUEST:
            return '定位中..';
        case FETCH_CITY_FAILURE:
            return '定位失败';
        default:
            return state;
    }
}

export const weather = (state = {}, action) => {
    switch(action.type) {
        case FETCH_WEATHER_SUCCESS:
            const hourly_forecast = action.weather.hourly_forecast
            if(hourly_forecast.length > 0) {
                const hourForecastOne = hourly_forecast[0]
                return {
                    tmp: hourForecastOne.tmp,
                    cond: hourForecastOne.cond.txt
                };    
            }else {
                return {
                    msg: '暂无数据'
                }
            }
            
        case FETCH_WEATHER_REQUEST:
            return {
                msg: '获取中..'
            };
        case FETCH_WEATHER_FAILURE:
            return {
                msg: '获取失败'
            };
        default:
            return state;
    }
}
