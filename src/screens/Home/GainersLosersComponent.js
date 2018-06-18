

import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';

import { MarketDetailComponent } from './MarketDetailComponent';
import { GLOBAL_GET_MARKETS_REQUESTED } from '../../store/global';
import { HOME_SHOW_GAINERS_LIST, HOME_SHOW_LOSERS_LIST } from '../../store/homeScreen';
import { globalBTC24TopMarketsSelector } from '../../store/global';

import styles from '../../styles/screens/Home/GainersLosersComponent';



class GainersLosersComponent extends Component {

    componentDidMount() {
        this.props.getMarkets();
    }


    shouldComponentUpdate(nextProps) {
        const currentProps = this.props;
        console.log(currentProps.showGainersList, nextProps.showGainersList)

        if (
            JSON.stringify(currentProps.markets) != JSON.stringify(nextProps.markets) ||
            currentProps.showGainersList != nextProps.showGainersList
        ) {
            return true;
        } else {
            return false;
        }
    }


    onShowGainersList() {
        this.props.setShowGainersList();
    }


    onShowLosersList() {
        this.props.setShowLosersList();
    }


    render() {
        const { markets, showGainersList } = this.props;

        return (
            <View style={ styles.container  }>
                {/* BTC market menu bar */}
                <View style={ styles.menuBar }>
                    <TouchableOpacity style={ [styles.menu, styles.menu__border] } onPress={() => this.onShowGainersList()}>
                        <Icon
                            name="angle-double-up"
                            style={ showGainersList ? [styles.menu_Icon, styles.menu_Icon__active]: styles.menu_Icon }
                        />
                        <Text style={ showGainersList ? [styles.menu_Text, styles.menu_Text__active]: styles.menu_Text }>
                            BTC 24h top
                        </Text>

                        { showGainersList ? <Icon name="caret-up" style={ styles.menu_Cursor }/> : null }
                    </TouchableOpacity>

                    <TouchableOpacity style={ styles.menu } onPress={() => this.onShowLosersList()}>
                        <Icon
                            name="angle-double-down"
                            style={ !showGainersList ? [styles.menu_Icon, styles.menu_Icon__active]: styles.menu_Icon }
                        />
                        <Text style={ !showGainersList ? [styles.menu_Text, styles.menu_Text__active]: styles.menu_Text }>
                            BTC 24h top
                        </Text>

                        { !showGainersList ? <Icon name="caret-up" style={ styles.menu_Cursor }/> : null }
                    </TouchableOpacity>
                </View>


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
                            24h Chg%
                        </Text>
                    </View>

                    {/* List */}
                    {
                        markets.map((market, index) => {
                            const { currency, coin, last_24h_price, change } = market;

                            return (
                                <MarketDetailComponent
                                    key={ index }
                                    currency={ currency }
                                    coin={ coin }
                                    last_24h_price={ last_24h_price }
                                    volume={ change }
                                />
                            );
                        })
                    }
                </View>
            </View>
        );
    }
}



const mapStateToProps = ({ global, homeScreen }) => ({
    markets: globalBTC24TopMarketsSelector(global),
    showGainersList: homeScreen.showGainersList,
});

const mapDispatchToProps = (dispatch) => ({
    getMarkets: () => {
        dispatch(GLOBAL_GET_MARKETS_REQUESTED());
    },

    setShowGainersList: () => {
        dispatch(HOME_SHOW_GAINERS_LIST());
    },

    setShowLosersList: () => {
        dispatch(HOME_SHOW_LOSERS_LIST());
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(GainersLosersComponent);

