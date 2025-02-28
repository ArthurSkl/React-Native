import { useState, useEffect } from 'react'
import {View, Text, StyleSheet} from 'react-native'
import {SafeAreaView, SafeAreaProvider} from "react-native-safe-area-context"
import {useIsFocused} from "@react-navigation/native"
import useStorage from "../../hooks/useStorage"
import { FlatList } from 'react-native-gesture-handler'
import {PasswordItem} from "./components/passworditem"

export function Passwords(){

    const [listPasswords, setListPasswords] = useState([])
    const focused =  useIsFocused();
    const {getItem, removeItem} = useStorage();

    useEffect(() => {

        async function loadPasswords () {
            const passwords = await getItem("@pass")
            setListPasswords(passwords);
        }

        loadPasswords();


    }, [focused])

    async function handleDeletePassword(item){
        console.log(item)
        const passwords = await removeItem("@pass", item)
        setListPasswords(passwords)
    }
    return(
        <SafeAreaProvider style={{flex:1}}>
            <SafeAreaView>

                <View style={styles.header}>

                    <Text style={styles.title}>

                        Minhas Senhas           

                    </Text>

                </View>

                <View style={styles.content}>

                    <FlatList 
                        style={{flex:1,paddingTop:14}}
                        data={listPasswords} 
                        keyExtractor={(item) => String(item)}
                        renderItem={ ( {item}) => <PasswordItem data={item} removePassword={()=>handleDeletePassword(item)}/> }>
                    </FlatList>        

                
                </View>

            </SafeAreaView>
        </SafeAreaProvider>
    )

}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#392de9",
        paddingTop:50,
        paddingBottom:14,
        paddingLeft:14,
        paddingRight:14,
    },
    title:{
        fontSize:18,
        color:"#FFF",
        fontWeight:"bold"
    },
    textSenha:{
        fontSize:20,
        width:"100%",
        height:"35%",
        position:"absolute",
        backgroundColor:"red"

    },
    content:{
        width:"100%",
        height:"100%",
        paddingLeft:14,
        paddingRight:14
       
    }


})