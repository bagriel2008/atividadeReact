import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet,
    Alert,
    TouchableOpacity
} from 'react-native';
import { login } from "../services/api";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const result = await login(email, password);
        if (result.success) {
            navigation.navigate('Vagas', { user: result.user })
        } else {
            Alert.alert('Erro', result.message)
        }
    }

    return (
        <>
        <View style={styles.container}>
            <View style={styles.div}>
                <Text style={styles.title}> Login </Text>
                <TextInput style={styles.input} placeholder="E-mail" onChangeText={setEmail} />
                <TextInput style={styles.input} placeholder="Senha" onChangeText={setPassword} />

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}> Entrar</Text>

                </TouchableOpacity>
                <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}> Criar Conta </Text>
                

            </View>
        </View>
        </>
    )

}

const styles = StyleSheet.create({
    div:{
        backgroundColor:'#808080',
        borderRadius:10
        
    },
    button:{
        display:'flex',
        width:200,
        height:40,
        backgroundColor:'blue',
        borderRadius:10,
        alignItems:'center',
        justifyContent:'center',
        margin:20,
        
    },
    buttonText:{
        
        color:'#ffff'
    },
    container: {
        alignItems:'center',
        flex: 1,
        justifyContent: 'center',
        padding: 20,  
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5,
        width:200,
        margin:15,
        backgroundColor:'#ffff'
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center'
    },
    link: {
        marginTop: 20,
        color: 'blue',
        textAlign: 'center'
    }
})