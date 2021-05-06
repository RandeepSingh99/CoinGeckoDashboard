export const actions = {
    GET_COINGECKO_DATA: 'GET_COINGECKO_DATA',
    SUCCESS_COINGECKO_DATA: 'SUCCESS_COINGECKO_DATA',
    COINGECKO_FILTER_DATA: 'COINGECKO_FILTER_DATA',
    FAILED_COINGECKO_DATA: 'FAILED_COINGECKO_DATA'
}
export const getCoinGeckoData = (data) => ({
    type: actions.GET_COINGECKO_DATA,
    payload: data,
})
