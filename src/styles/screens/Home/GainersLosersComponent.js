import { ScaledSheet, moderateScale } from 'react-native-size-matters';
import { Colors, FontSize, Size } from '../../variables';



const MenuCursorPosition = -moderateScale(4);

export default ScaledSheet.create({
    container: {
        width: '100%',
        flexDirection: 'column',
        paddingBottom: Size.s5,
    },

    menuBar: {
        width: '100%',
        height: '30@ms',
        flexDirection: 'row',
        backgroundColor: Colors.gray,
        paddingLeft: Size.s5,
        paddingRight: Size.s5,
    },

    menu: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
    },

    menu__border: {
        borderRightWidth: 1,
        borderRightColor: Colors.lightGray,
    },

    menu_Cursor: {
        position: 'absolute',
        bottom: MenuCursorPosition,
        fontSize: FontSize.p,
        color: Colors.yellow,
    },

    menu_Text: {
        color: Colors.white,
        fontSize: FontSize.p,
    },
    menu_Text__active: {
        color: Colors.yellow,
    },

    menu_Icon: {
        color: Colors.white,
        fontSize: FontSize.h3,
        marginRight: Size.s2,
    },
    menu_Icon__active: {
        color: Colors.yellow,
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
