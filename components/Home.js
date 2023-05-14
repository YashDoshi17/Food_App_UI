import * as React from 'react';
import {Text, StyleSheet, Image, View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import categoriesData from '../assets/data/categoriesData';
import popularData from '../assets/data/popularData';
import {SafeAreaView} from 'react-native-safe-area-context';
import colors from '../assets/colors/colors';


export default Home = () =>{
    return (
        <SafeAreaView style = {styles.container}>
            {/* HeaderSection */}
                <View style = {styles.headerWrapper}>
                    <Image source={require('../assets/images/profile.png')} 
                    style = {styles.profileImage}/>
                    <Feather name="menu" size={24} color={colors.textDark} />
                </View>

            {/* TitleSection    */}
                <View style = {styles.titlesWrapper}>
                    <Text style = {styles.titlesSubtitle}>Food</Text>
                    <Text style = {styles.titlesTitle}>Delivery</Text>
                </View>
            
            {/* SearchSection    */}
                <View style = {styles.searchWrapper}>
                    <Feather name="search" size={16} color={colors.textDark}/>
                    <View style = {styles.search}>
                    <Text style = {styles.searchText}>Search</Text>
                    </View>
                </View>

        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headerWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 40,
    },
    titlesWrapper: {
        marginTop: 30,
        paddingHorizontal: 20,
    },
    titlesSubtitle: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: colors.textDark,
    },
    titlesTitle: {
        fontFamily: 'Monteserrat-Bold',
        fontSize: 32,
        color: colors.textDark,
        marginTop: 5,

    },
    searchWrapper: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 30,
    },
    search: {
        flex: 1,
        marginLeft: 10, 
        borderBottomColor: colors.textLight,
        borderBottomWidth: 2,
    },
    searchText: {
        fontSize: 14,
        color: colors.textLight,
        marginBottom: 5,
    },
})