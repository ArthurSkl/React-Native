import { View,Text,StyleSheet,TouchableOpacity, Pressable } from "react-native";
import * as Clipboard from 'expo-clipboard'
import {useStorage} from "../../../hooks/useStorage"



export function ModalPassword({password,handleClose}){
    const {saveItem} = useStorage();

    async function handleCopyPassoword() {
        await Clipboard.setStringAsync(password)
        alert("senha salva")

        await saveItem("@pass", password)

        handleClose();
    }
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Senha Gerada</Text>

                <Pressable style={styles.innerPassword} onPress={handleCopyPassoword}>
                    <Text style={styles.text}>
                        {password}
                    </Text>
                </Pressable>

                <View style={styles.buttonArea}>

                    <TouchableOpacity style={[styles.button, styles.buttonVoltar]} onPress={handleClose}>
                        
                        
                        <Text style={styles.buttonText}>
                            Voltar
                        </Text>   
                        
                    </TouchableOpacity > 

                    <TouchableOpacity style={[styles.button, styles.buttonSave]}>
                        
                        
                        <Text style={styles.buttonSaveText}>
                            Salvar Senha
                        </Text>   
                        
                    </TouchableOpacity>   
                    

                </View>

            </View>
            
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        backgroundColor:"rgba(24,24,24,0.6)",
        flex:1,
        alignItems:'center',
        justifyContent:'center'                    
    },
    content:{
        backgroundColor:"#FFF",
        width:"85%",
        paddingTop:24,
        paddingBottom:24,alignItems:"center",
        justifyContent:"center",
        borderRadius:16
    },
    title:{
        fontSize:20,
        fontWeight:"bold",
        color:"#000"
    },
    innerPassword:{
        backgroundColor:"#0e0e0e",width:"90%",
        height:"18%",
        padding:14,
        borderRadius:16,
    },
    text:{
        color:"#FFF",
        textAlign:"center"
    },
    buttonArea:{
        flexDirection:"row",
        width:"90%",
        marginTop:8,
        alignItems:"center",
        justifyContent:"space-between"
    },
    button:{
        flex:1,
        alignItems:"center",
        marginTop:14,
        marginBottom:14,
        padding:8,
    },
    buttonSave:{
       backgroundColor:"#392DE9",
       borderRadius:8,
       marginLeft:5

    },
    buttonSaveText:{
        color:"#FFF",
        fontWeight:"bold"
    },
    buttonVoltar:{
        backgroundColor:"orange",
        borderRadius:8,
        marginRight:5
        
    }
})