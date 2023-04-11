import { Text, View,StyleSheet, Platform, Pressable } from "react-native"

function CategoryGridTile({item,onPress}){

return <View style={styles.gridItem}>
    <Pressable 
    android_ripple={{color:"#ccc"}}
    style={({pressed})=>[styles.button,pressed?styles.buttonPressed:null]}
    onPress={onPress}
    >
    <View style={[styles.innerContainer,{backgroundColor:item.color}]}>
    <Text style={styles.title}>{item.title}</Text>
    </View>
    </Pressable>
</View>
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem:{
        // borderWidth:2,
        flex:1,
        margin:16,
        height:150,
        elevation:4,
        shadowColor:'white',
        shadowOpacity:0.25,
        shadowOffset:{width:0,height:12},
        shadowRadius:8,
        overflow:Platform.OS === 'android' ? 'hidden':'visible'

    },
    title:{
        fontWeight:"bold",
        fontSize:18
    },
    innerContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
      
        
    },
    button:{
        flex:1
    },
    buttonPressed:{
        opacity:0.5
    }
})