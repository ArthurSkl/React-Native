import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import {ModalPassword} from '../../assets/components/modal password'

let charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
export function Home() {

  const[size, setSize] = useState(10)
  const[passwordValue, setpasswordValue]=useState("")
  const[modalVisible, setModalVisible] = useState(false);

  function generatepassword(){
    let password = "";
    for(let i = 0,n=charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random()*n))
    }
    setpasswordValue(password)
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image source={require("../../assets/logo.png")}
      style={styles.logo}/>
      <StatusBar style="auto" />




      <Text style={styles.title}>{size} caracter</Text>
      <View style={styles.area}>
        <Slider style={{ width: '100%', height: 40 }} minimumValue={8} maximumValue={34} 
        value={size}
        onValueChange={(value) => setSize(Number(value.toFixed(0)))}
        >
        
        </Slider>
      </View>

      <TouchableOpacity style={styles.button} onPress={ generatepassword}>
        <Text style={styles.buttonText} >Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={()=>setModalVisible(false)}/>

       
      </Modal>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f3ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width:"100%",
    height:"30%",
    marginBottom:60,
    objectFit:"contain"
  },
  area:{
    marginTop:14,
    marginBottom:14,
    width:"80%",
    backgroundColor:"#FFF",
    borderRadius:12,
    padding:8,
  },
  button: {
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
  title:{
    fontSize:35,
    fontWeight:'bold'
  }
  

});
