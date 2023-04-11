import { Ionicons } from "@expo/vector-icons"
import { Pressable } from "react-native"

function IconButton({icon,color,onPress,size}){
return <Pressable onPress={onPress}>
    <Ionicons name={icon} color={color} size={size}/>
</Pressable>
}

export default IconButton