import React, { PureComponent } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import { GLOBAL_GET_MARKETS_REQUESTED } from '../../store/global';
import { globalHotMarketsSelector } from '../../store/global';
import { currenyFormatFilter } from '../../utils/filters';

import styles from '../../styles/screens/Home/HotMarketsComponent';


export const MarketInfoComponent = (props) => {
    const { currency, coin, price, change, isBordered } = props;
    const coinPair = `${currency} / ${coin}`;
    const componentStyle = isBordered ? [styles.slideItem, styles.slideItem_BorderRight ] : styles.slideItem;

    return (
        <TouchableOpacity style={ componentStyle }>
            <Text style={ styles.slideItem_Market }>{ currenyFormatFilter(coinPair) }</Text>
            <Text style={ styles.slideItem_Price }>Price</Text>
            <Text style={ styles.slideItem_Change }>{ change }</Text>
        </TouchableOpacity>
    );
};


class HotMarketsComponent extends PureComponent {

    componentDidMount() {
        this.props.getMarkets();
    }


    render() {
        const { markets } = this.props;

        return (
            <View style={ styles.container }>
                 <Swiper
                    showsButtons={ false }
                    loop={ true }
                    paginationStyle={ styles.paginationStyle }
                >   
                    <View style={ styles.slideContainer }>
                        {
                            markets.slice(0, 3).map((market, index) => (
                                <MarketInfoComponent 
                                    key={ index }
                                    isBordered={ index !== 2 }
                                    currency={ market.currency }
                                    coin={ market.coin }
                                    price={ market.price }
                                    change={ market.change }
                                />
                            ))
                        }
                    </View>

                    <View style={ styles.slideContainer }>
                        {
                            markets.slice(3, 5).map((market, index) => (
                                <MarketInfoComponent 
                                    key={ index }
                                    isBordered={ index !== 5 }
                                    currency={ market.currency }
                                    coin={ market.coin }
                                    price={ market.price }
                                    change={ market.change }
                                />
                            ))
                        }

                        {/* More markets button */}
                        <TouchableOpacity style={ styles.slideItem }>
                            <View style={{ flexDirection: 'row' }} >
                                <Text style={ styles.slideItem_moreBtnText }>More</Text>
                                <Icon name="angle-double-right" style={ styles.slideItem_moreBtnIcon } />
                            </View>
                        </TouchableOpacity>
                    </View>
                </Swiper>
            </View>
        );
    }
}



const mapStateToProps = ({ global }) => ({
    markets: globalHotMarketsSelector(global),
});

const mapDispatchToProps = (dispatch) => ({
    getMarkets: () => {
        dispatch(GLOBAL_GET_MARKETS_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(HotMarketsComponent);
