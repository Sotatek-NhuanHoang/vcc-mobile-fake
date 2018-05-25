import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { currenyFormatFilter, coinPriceFormatFilter, marketVolumeFormatFilter } from '../../utils/filters';

import styles from '../../styles/screens/Home/MarketDetailComponent';



export const MarketDetailComponent = (props) => {
    const { currency, coin, last_24h_price, volume } = props;

    return (
        <TouchableOpacity style={ styles.container } >
            <View style={ styles.marketDetail_CoinPair } >
                <Text style={ styles.marketDetail_CoinPair_CurrencyText } >
                    { currenyFormatFilter(coin) }
                </Text>
                <Text style={ styles.marketDetail_CoinPair_CoinText }>
                    / { currenyFormatFilter(currency) }
                </Text>
            </View>

            <View style={ styles.marketDetail_LastPrice } >
                <Text style={ styles.marketDetail_LastPriceText } >
                    { coinPriceFormatFilter(last_24h_price) }
                </Text>
            </View>

            <View style={ styles.marketDetail_Volume } >
                <Text style={ styles.marketDetail_VolumeText } >
                    { marketVolumeFormatFilter(volume) }
                </Text>
            </View>
        </TouchableOpacity>
    );
};

export default MarketDetailComponent;
