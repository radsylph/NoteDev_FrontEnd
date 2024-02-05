import * as React from 'react';
import { StyleSheet, Text, View, SafeAreaView,TextInput,Image,TouchableOpacity,ScrollView } from 'react-native';

import Btn from '../components/Btn';
import COLORS from "../constants/colors";

const Login = ({ navigation }) =>{
    return(
        <SafeAreaView style={{ backgroundColor:COLORS.purple}}>
            
            <View style={{alignItems:"center"}}>
                <Text style={{color:COLORS.white, fontSize: 64, fontWeight: 'bold', marginTop: 20,}}>Register</Text>
                <Text style={{color:COLORS.white, fontSize: 19, fontWeight: 'bold', marginBottom: 20,}}>create a new account</Text>
                <View style={{backgroundColor: COLORS.white, height:700, width:460, borderTopLeftRadius:130, paddingTop:60, alignItems:'center', marginHorizontal: 22}}>
                   

            
                    <TextInput style={{ height:48, borderRadius: 100, color:COLORS.purple, paddingHorizontal: 10, width:'80%', backgroundColor: COLORS.grayish_white, marginVertical: 10}}
                    placeholderTextColor={COLORS.purple} placeholder='User Name'
                    keyboardType={"email-address"}
                    ></TextInput>

                    <TextInput style={{ height:48, borderRadius: 100, color:COLORS.purple, paddingHorizontal: 10, width:'80%', backgroundColor: COLORS.grayish_white, marginVertical: 10}}
                    placeholderTextColor={COLORS.purple} placeholder='E-mail'
                    keyboardType={"email-address"}
                    ></TextInput>


                    <TextInput style={{height:48 ,borderRadius: 100, color:COLORS.purple, paddingHorizontal: 10, width:'80%', backgroundColor: COLORS.grayish_white, marginVertical: 10}}
                    placeholderTextColor={COLORS.purple} placeholder='Password'
                    secureTextEntry={true}
                    ></TextInput>

                    <TextInput style={{height:48 ,borderRadius: 100, color:COLORS.purple, paddingHorizontal: 10, width:'80%', backgroundColor: COLORS.grayish_white, marginVertical: 10}}
                    placeholderTextColor={COLORS.purple} placeholder=' Confirm Password'
                    secureTextEntry={true}
                    ></TextInput>
 
                    <Btn TextColor={COLORS.white} Colorbtn={COLORS.purple} textColor={COLORS.white} btnLabel="Signup" Press={() => {alert("Account created"), navigation.navigate("Login")}}  />
                    <View style={{display:'flex', flexDirection:'row', justifyContent:'center'}}>
                            <Text>Already have an account?</Text>
                            <TouchableOpacity>
                                <Text style={{color: COLORS.purple, fontWeight:'bold', fontSize: 16}} onPress={() => navigation.navigate("Login")}>Login</Text>
                            </TouchableOpacity>
                    </View>
                  
                </View>
            </View>
            
        </SafeAreaView>
    )
}

export default Login