import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { MarketDetailComponent } from './MarketDetailComponent';
import { GLOBAL_GET_MARKETS_REQUESTED } from '../../store/global';
import { globalBTC24TopMarketsSelector } from '../../store/global';

import styles from '../../styles/screens/Home/BTC24hTopComponent';



class BTC24hTopComponent extends Component {

    componentDidMount() {
        this.props.getMarkets();
    }


    shouldComponentUpdate(nextProps) {
        const currentProps = this.props;

        if (JSON.stringify(currentProps.markets) != JSON.stringify(nextProps.markets)) {
            return true;
        } else {
            return false;
        }
    }


    render() {
        const { markets } = this.props;

        return (
            <View style={ styles.container  }>
                {/* BTC market menu bar */}
                <TouchableOpacity style={ styles.btcMenuBar } >
                    <Text style={ styles.btcMenuBar_Text }>BTC 24h top</Text>
                    <Icon name="angle-right" style={ styles.btcMenuBar_Icon } />
                </TouchableOpacity>


                {/* Market list */}
                <View style={ styles.marketListContainer } >
                    {/* Header */}
                    <View style={ styles.marketListHeader }>
                        <Text style={ styles.marketListHeader_Text }>
                            Coin pair
                        </Text>

                        <Text style={ styles.marketListHeader_Text }>
                            Last Price
                        </Text>

                         <Text style={ [styles.marketListHeader_Text, styles.marketListHeader_TextRight] }>
                            Volume(BTC)
                        </Text>
                    </View>

                    {/* List */}
                    {
                        markets.map((market, index) => {
                            const { currency, coin, last_24h_price, volume } = market;

                            return (
                                <MarketDetailComponent
                                    key={ index }
                                    currency={ currency }
                                    coin={ coin }
                                    last_24h_price={ last_24h_price }
                                    volume={ volume }
                                />
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}



const mapStateToProps = ({ global }) => ({
    markets: globalBTC24TopMarketsSelector(global),
});

const mapDispatchToProps = (dispatch) => ({
    getMarkets: () => {
        dispatch(GLOBAL_GET_MARKETS_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BTC24hTopComponent);
