import { ScaledSheet } from 'react-native-size-matters';
import { Colors, FontSize } from '../../variables';


const ComponentHeight = 80;

export default ScaledSheet.create({
    container: {
        height: `${ComponentHeight}@ms`,
        backgroundColor: Colors.gray,
    },

    paginationStyle: {
        bottom: '2@ms',
    },

    slideContainer: {
        flexDirection: 'row',
    },

    slideItem: {
        flex: 1,
        height: `${ComponentHeight}@ms`,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: '15@ms',
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
