import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import styles from '../../styles/screens/Home/HotMarketsComponent';
import { GLOBAL_GET_MARKETS_REQUESTED } from '../../store/global';


class HotMarketsComponent extends PureComponent {

    componentDidMount() {
        this.props.getMarkets();
    }


    render() {
        return (
            <View style={ styles.container }>
                 <Swiper
                    showsButtons={ false }
                    loop={ true }
                    paginationStyle={ styles.paginationStyle }
                >
                    <View style={ styles.slideContainer }>
                        <View style={ styles.slideItem }>
                            <Text style={ styles.slideItem_Market }>Nhuan</Text>
                            <Text style={ styles.slideItem_Price }>Nhuan</Text>
                            <Text style={ styles.slideItem_Change }>HiHi</Text>
                        </View>

                        <View style={ styles.slideItem }>
                            <Text style={ styles.slideItem_Market }>Nhuan</Text>
                            <Text style={ styles.slideItem_Price }>Nhuan</Text>
                            <Text style={ styles.slideItem_Change }>HiHi</Text>
                        </View>

                        <View style={ styles.slideItem }>
                            <Text style={ styles.slideItem_Market }>Nhuan</Text>
                            <Text style={ styles.slideItem_Price }>Nhuan</Text>
                            <Text style={ styles.slideItem_Change }>HiHi</Text>
                        </View>
                    </View>

                    <View style={ styles.slideContainer }>
                        <View style={ styles.slideItem }>
                            <Text style={ styles.slideItem_Market }>Nhuan</Text>
                            <Text style={ styles.slideItem_Price }>Nhuan</Text>
                            <Text style={ styles.slideItem_Change }>HiHi</Text>
                        </View>

                        <View style={ styles.slideItem }>
                            <Text style={ styles.slideItem_Market }>Nhuan</Text>
                            <Text style={ styles.slideItem_Price }>Nhuan</Text>
                            <Text style={ styles.slideItem_Change }>HiHi</Text>
                        </View>

                        <View style={ styles.slideItem }>
                            <Text style={ styles.slideItem_Market }>Nhuan</Text>
                            <Text style={ styles.slideItem_Price }>Nhuan</Text>
                            <Text style={ styles.slideItem_Change }>HiHi</Text>
                        </View>
                    </View>
                </Swiper>
            </View>
        );
    }
}


const mapStateToProps = ({ global }) => ({
    markets: global.markets,
});

const mapDispathToProps = (dispatch) => ({
    getMarkets: () => {
        dispatch(GLOBAL_GET_MARKETS_REQUESTED());
    },
});

export default connect(mapStateToProps, mapDispathToProps)(HotMarketsComponent);
