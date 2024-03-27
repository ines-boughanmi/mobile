import React, {useState} from  'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SignUp from '../SignUp';


import Interface from '../../Interface/Consultant';



const LoginComponent = ({onPress, value , setValue, placeholder, secureTextEntry}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

const onSignupPressed= () => {

navigation.navigate('SignUp');
};

const onInterfacepressed= () => {

  
  navigation.navigate('Interface');
};
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.logoContainer}>
        <Image source={require('../../assets/onetechb.png')} style={styles.logo} />
      </TouchableOpacity>
      <Text style={styles.heading}>Login</Text>
      <View style={styles.line}></View>
      <View style={styles.form}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Email</Text>
          <TextInput value={email} onChangeText={setEmail} style={styles.input} placeholder="example@gmail.com" keyboardType="email-address" />
        </View>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Password</Text>
          <TextInput value={password} onChangeText={setPassword} style={styles.input} placeholder="Enter your password" secureTextEntry={true} />
        </View>
        <TouchableOpacity  style={styles.button}>
          <Text onPress={onInterfacepressed} style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.signUpText}>Don't have an account? Sign up <Text onPress={onSignupPressed} style={styles.link}>here</Text></Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  logo: {
    width: 250,
    height: 100,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#00396b',
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#f08700',
    width: '100%',
    marginVertical: 15,
  },
  form: {
    width: '100%',
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#00396b',
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#f08700',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
  signUpText: {
    marginTop: 20,
    fontSize: 18,
  },
  link: {
    color: '#f08700',
    textDecorationLine: 'underline',
  },
});

export default LoginComponent;
