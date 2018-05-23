import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { connect } from 'react-redux';

import styles from '../../styles/screens/Home/HotMarketsComponent';
import { GLOBAL_GET_MARKETS_REQUESTED } from '../../store/global';


class HotMarketsComponent extends PureComponent {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(GLOBAL_GET_MARKETS_REQUESTED());
    }


    render() {
        return (
            <View style={ styles.container }>
                 <Swiper
                    showsButtons={ false }
                    loop={ true }
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


const mapDispathToProps = (dispatch) => ({ dispatch });

export default connect(null, mapDispathToProps)(HotMarketsComponent);
