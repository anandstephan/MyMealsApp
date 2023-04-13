import { FlatList, Text,View } from "react-native"
import CategoryGridTile from "../components/CategoryGridTile"
import { CATEGORIES } from "../data/dummy-data"


function CategoriesScreen({navigation}){   
function renderCategoryItem(itemData){
    function pressHandler(){
            navigation.navigate('MealsOverView',{categoryId:itemData.id})
    }

    return <CategoryGridTile item={itemData} onPress={pressHandler}/>
}


return <FlatList
data={CATEGORIES}
renderItem={({item}) => renderCategoryItem(item)}
numColumns={2}
/>
}


export default CategoriesScreen