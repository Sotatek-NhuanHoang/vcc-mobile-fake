import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSize } from '../../variables';


export default ScaledSheet.create({
    container: {
        height: 100,
        backgroundColor: Colors.gray,
        marginTop: 20,
    },

    slideContainer: {
        flexDirection: 'row',
    },

    slideItem: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },

    slideItem_Market: {
        fontSize: FontSize.small,
        color: Colors.lightGray,
        fontWeight: '400',
    },

    slideItem_Price: {
        fontSize: FontSize.h2,
        color: Colors.white,
    },

    slideItem_Change: {
        fontSize: FontSize.small,
        color: Colors.red,
    },
});
