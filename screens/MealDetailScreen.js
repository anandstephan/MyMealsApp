import { useContext, useEffect } from "react"
import { View,Text, ScrollView, Image,StyleSheet } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
import MealsDetails from "../components/MealsDetails";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailScreen({navigation,route}){
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find(meal => meal.id === mealId)
  
    const favoriteMealCtx = useContext(FavoritesContext)
    console.log(favoriteMealCtx)
    const mealIsFavorite = favoriteMealCtx.ids.includes(mealId)
    function changeFavoritesStatusHandler (){
        if(mealIsFavorite){
            favoriteMealCtx.removeFavorite(mealId)
        }else{
            favoriteMealCtx.addFavorite(mealId)
        }
    }

    useEffect(()=>{
            navigation.setOptions({
                headerRight:()=> <IconButton icon={mealIsFavorite ?"star":"star-outline"} size={24} color="white" onPress={changeFavoritesStatusHandler}/>
            })
    },[navigation,changeFavoritesStatusHandler])
return <ScrollView style={styles.rootContainer}>
    <Image source={{uri:selectedMeal.imageUrl}} style={styles.image}/>
    <Text style={styles.title}>{selectedMeal.title}</Text>
    <MealsDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability} 
    />
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <SubTitle>Ingredients</SubTitle>
                <List>{selectedMeal.ingredients}</List>
                <SubTitle>Steps</SubTitle>
                <List>{selectedMeal.steps}</List>
            </View>
        </View>
</ScrollView>
}

export default MealDetailScreen

const styles = StyleSheet.create({
    image:{
        width:"100%",
        height:350
    },
    detailText:{
        color:"white"
    },
    rootContainer:{
        marginBottom:52
    },
    title:{
        fontWeight:"bold",
        fontSize:24,
        margin:8,
        textAlign:'center',
        color:"#e2b497"
    },
    listOuterContainer:{
        alignItems:"center"
    },
    listContainer:{
        width:"80%"
    }
})