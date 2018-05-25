import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSize, Size } from '../../variables';


export default ScaledSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: Colors.lightGray,
        paddingTop: Size.s2,
        paddingBottom: Size.s2,
        marginLeft: Size.s5,
        marginRight: Size.s5,
    },

    marketDetail_CoinPair: {
        flex: 1,
        flexDirection: 'row',
    },

    marketDetail_CoinPair_CurrencyText: {
        color: Colors.white,
        fontSize: FontSize.h4,
        marginRight: Size.s1,
    },

    marketDetail_CoinPair_CoinText: {
        color: Colors.lightGray,
        fontSize: FontSize.small,
        marginTop: Size.s1,
    },

    marketDetail_LastPrice: {
        flex: 1,
        paddingRight: Size.s3,
    },

    marketDetail_LastPriceText: {
        color: Colors.white,
        fontSize: FontSize.h4,
    },

    marketDetail_Volume: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },

    marketDetail_VolumeText: {
        color: Colors.white,
        fontSize: FontSize.h4,
    },
});
