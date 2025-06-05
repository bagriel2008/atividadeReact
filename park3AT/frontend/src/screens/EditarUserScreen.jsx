import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import { editarUsuario } from "../services/api";

export default function EditarUserScreen({ navigation, route }) {
    const userId = route.params.user.id;
    console.log(route.params)

    const [form, setForm] = useState({
        username: '', email: '', placa: '', 
        cor: '', modelo: ''
    });

    const handleChange = (name, value) => setForm({ ...form, [name]: value })

    const handleSubmit = async () => {
        const result = await editarUsuario(userId, form);
        console.log('Enviando dados:', form);

        if (result.success) {
            Alert.alert('Sucesso', result.message);
            navigation.navigate('Login');
        } else {
            Alert.alert('Erro', result.message || 'Erro ao editar usuário');
        }
    };

    return (
        <View style={styles.container}>
            <Text>
                Editar Usuário
            </Text>
            {['username', 'email', 'placa', 'cor', 'modelo'].map((field) => (
                <TextInput
                    key={field}
                    placeholder={field}
                    value={form[field]}
                    onChangeText={(value) => handleChange(field, value)}
                    style={styles.input}
                />
            ))}
            <Button title='editar usuario' onPress={handleSubmit} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        flex: 1,
        justifyContent: 'center',
        padding: 20,  
    },
    input:{
        borderWidth: 1,
        marginBottom: 10,
        padding: 10,
        borderRadius: 5
    }
})