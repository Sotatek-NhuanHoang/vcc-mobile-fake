import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSize, Size } from '../../variables';


export default ScaledSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingBottom: Size.s2,
    },

    btcMenuBar: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: Colors.gray,
        paddingTop: Size.s2,
        paddingBottom: Size.s2,
        paddingLeft: Size.s5,
        paddingRight: Size.s5,
    },

    btcMenuBar_Text: {
        flex: 1,
        color: Colors.white,
        fontSize: FontSize.p,
    },

    btcMenuBar_Icon: {
        color: Colors.white,
        fontSize: FontSize.h3,
    },

    marketListContainer: {
        flex: 1,
        flexDirection: 'column',
    },

    marketListHeader: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#131A1F',
        paddingTop: Size.s1,
        paddingBottom: Size.s1,
        paddingLeft: Size.s5,
        paddingRight: Size.s5,
    },

    marketListHeader_Text: {
        flex: 1,
        color: Colors.lightGray,
        fontSize: FontSize.small,
    },

    marketListHeader_TextRight: {
        textAlign: 'right',
    },
});
