import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from 'react'
import Coin from "../../components/Coin";
import Search from "../../components/Search";
import { getCoinGeckoData } from "./Store/actions";
import GraphModal from "../../components/GraphModal";
import axios from "axios";
const Home = () => {
    const [searchData, setSearchData] = useState("")
    const [graphModal, setGraphModal] = useState(false)
    const [idForGraph, setIdForGraph] = useState()
    const [nameChart, setNameChart] = useState()
    const [symbol, setSymbol] = useState()
    const [loader, setLoader] = useState(false)
    const dispatch = useDispatch()
    useEffect(() => {
        setLoader(true)
        dispatch(getCoinGeckoData())
        setLoader(false)
    }, [])
    useEffect(() => {
        async function getData() {
          const ApiData = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=200&regionCode=IN&key=AIzaSyAgEjjl6RR0SYn5YqBwcFnlWEYYn_AU79s`
          );
          console.log(ApiData);
        }
        getData()
      },[]);

    const coinData = useSelector(state => state?.reducerCoinGecko?.data?.data)
    // const searchsData = useSelector(state => state.reducerCoinGecko.data.data)
    const loading = useSelector(state => state.loading)
    const error = useSelector(state => state.error)
    console.log(searchData)
    return (
        <>
            {coinData?.length === 0 && <p>Loading...</p>}
            {error && !loading && <p>{error}</p>}
            {loader ? <div>Loading...</div> :
                <div className="coin-app">
                    <div className="coin-search">
                        <h1 className="coin-text">Search a currency</h1>
                        <form>
                            <Search type="text"
                                placeholder="Search"
                                onKeyPressHandle={(e) => {
                                    setSearchData(e?.target?.value)
                                }}
                            />
                        </form>
                    </div>
                    <div className="all-coin">
                        {coinData?.filter((val) => {
                            if (searchData === "") {
                                return val;
                            } else if (val.name.toLowerCase().includes(searchData.toLowerCase())) {
                                return val;
                            }
                        }).map((coin) => {

                            return (
                                <div onClick={() => {
                                    setGraphModal(true);
                                    setIdForGraph(coin?.id)
                                    setNameChart(coin?.name)
                                    setSymbol(coin?.symbol)
                                }}>
                                    <Coin
                                        key={coin?.id}
                                        coinImg={coin?.image}
                                        coinName={coin?.name}
                                        coinSymbol={coin?.symbol}
                                        price={coin?.price_change_24h}
                                        percent={coin?.market_cap_change_percentage_24h}
                                        volume={coin?.total_volume}
                                        marketCap={coin?.market_cap}



                                    />
                                </div>
                            )
                        })}

                        <GraphModal
                            id={idForGraph}
                            coinSymbol={symbol}
                            name={nameChart}
                            isOpen={graphModal}
                            toClose={() => {
                                setGraphModal(false);
                            }}
                        />
                    </div>
                </div>
            }
        </>
    );
}; export default Home;