import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Home} from './pages/home'
import {Passwords} from './pages/passwords'
import {Ionicons} from '@expo/vector-icons'

const Stack = createBottomTabNavigator();


export function Routes (){
    return(
        <Stack.Navigator>
            
            <Stack.Screen name="Home" component={Home} options={{headerShown: false, tabBarIcon:({focused, size, color,})=>{
                if(focused){
                    return<Ionicons size={size} color={color} name="home"/>
                }
                return <Ionicons size={size} color={color} name='home-outline'/>
            }

            }} />
            <Stack.Screen name="Passwords" component={Passwords} options={{headerShown: false, tabBarIcon:({focused, size, color,})=>{
                if(focused){
                    return<Ionicons size={size} color={color} name="lock-closed"/>
                }
                return <Ionicons size={size} color={color} name='lock-closed-outline'/>
            }}} />

        </Stack.Navigator>
    )
}