import React from "react";
const Coin = (props) => {

    return (
        <>
            <div className="coin-container">
                <div className="coin-row">
                    <div className="coin">
                        <img src={props.coinImg} alt="crypto" />
                        <h1>{props.coinName}</h1>
                        <p className="coin-symbol">{props.coinSymbol}</p>
                    </div>
                    <div className="coin-data">
                        <p className="coin-price">${props.price}</p>
                        <p className="coin-volume">${props.volume.toLocaleString()}</p>
                        {props.percent < 0 ? (<p className="coin-percent red">{props.percent.toFixed(2)}%</p>):
                        (<p className="coin-percent green">{props.percent.toFixed(2)}%</p>)}
                        <p className="coin-marketCap">
                            Mkt Cap: ${props.marketCap.toLocaleString()}
                        </p>
                        <div className="graph">
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Coin;

