// import React from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native';
// import LinearGradient from 'react-native-linear-gradient';
// import { COLORS, ROUTES } from '../../constants';
// import Logo from '../../assets/icons/LOGO.svg';
// import { useNavigation } from '@react-navigation/native';

// const Login = (props) => {
//   // const {navigation} = props;
//   const navigation = useNavigation();

//   return (
//     <SafeAreaView style={styles.main}>
//       <View style={styles.container}>
//         <View style={styles.wFull}>
//           <View style={styles.row}>
//             <Logo width={55} height={55} style={styles.mr7} />
//             <Text style={styles.brandName}>Olors</Text>
//           </View>

//           <Text style={styles.loginContinueTxt}>Login in to continue</Text>
//           <TextInput style={styles.input} placeholder="Email" />
//           <TextInput style={styles.input} placeholder="Password" />

//           <View style={styles.loginBtnWrapper}>
//             <LinearGradient
//               colors={[COLORS.gradientForm, COLORS.primary]}
//               style={styles.linearGradient}
//               start={{ y: 0.0, x: 0.0 }}
//               end={{ y: 1.0, x: 0.0 }}
//             >
//               {/* LOGIN BUTTON */}
//               <TouchableOpacity
//                 onPress={() => navigation.navigate(ROUTES.HOME)}
//                 activeOpacity={0.7}
//                 style={styles.loginBtn}
//               >
//                 <Text style={styles.loginText}>Log In</Text>
//               </TouchableOpacity>
//             </LinearGradient>
//           </View>

//           {/* FORGOT PASSWORD BUTTON */}
//           <TouchableOpacity
//             onPress={() =>
//               navigation.navigate(ROUTES.FORGOT_PASSWORD, {
//                 userId: 'X0001',
//               })
//             }
//             style={styles.forgotPassBtn}
//           >
//             <Text style={styles.forgotPassText}>Forgot Password?</Text>
//           </TouchableOpacity>
//         </View>

//         <View style={styles.footer}>
//           <Text style={styles.footerText}> Don't have an account? </Text>
//           {/* REGISTER BUTTON */}
//           <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
//             <Text style={styles.signupBtn}>Sign Up</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Login;


// const styles = StyleSheet.create({
//   main: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 16,
//   },
//   container: {
//     padding: 15,
//     width: '100%',
//     position: 'relative',
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   brandName: {
//     fontSize: 42,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     color: COLORS.primary,
//     opacity: 0.9,
//   },
//   loginContinueTxt: {
//     fontSize: 21,
//     textAlign: 'center',
//     color: COLORS.gray,
//     marginBottom: 16,
//     fontWeight: 'bold',
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: COLORS.grayLight,
//     padding: 15,
//     marginVertical: 10,
//     borderRadius: 5,
//     height: 55,
//     paddingVertical: 0,
//   },
//   // Login Btn Styles
//   loginBtnWrapper: {
//     height: 55,
//     marginTop: 12,
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.4,
//     shadowRadius: 3,
//     elevation: 5,
//   },
//   linearGradient: {
//     width: '100%',
//     borderRadius: 50,
//   },
//   loginBtn: {
//     textAlign: 'center',
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: 55,
//   },
//   loginText: {
//     color: COLORS.white,
//     fontSize: 16,
//     fontWeight: '400',
//   },
//   forgotPassText: {
//     color: COLORS.primary,
//     textAlign: 'center',
//     fontWeight: 'bold',
//     marginTop: 15,
//   },
//   // footer
//   footer: {
//     position: 'absolute',
//     bottom: 20,
//     textAlign: 'center',
//     flexDirection: 'row',
//   },
//   footerText: {
//     color: COLORS.gray,
//     fontWeight: 'bold',
//   },
//   signupBtn: {
//     color: COLORS.primary,
//     fontWeight: 'bold',
//   },
//   // utils
//   wFull: {
//     width: '100%',
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: 20,
//   },
//   mr7: {
//     marginRight: 7,
//   },
// });
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS, ROUTES } from '../../constants';
import Logo from '../../assets/icons/LOGO.svg';
import { useNavigation } from '@react-navigation/native';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Perform login logic
    navigation.navigate(ROUTES.HOME)
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/logovmm.png')} style={styles.logo} />
      <Text style={styles.name}>VMM School</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={text => setEmail(text)}
          value={email}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
      </View>
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.FORGOT_PASSWORD)}>
        <Text style={styles.forgot}>Forgot Password?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate(ROUTES.REGISTER)}>
        <Text style={styles.signup}>Don't have an account? Sign up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    // height:150,
    // width:150,
    marginBottom:20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#fb5b5a',
    marginBottom: 20,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  inputText: {
    height: 50,
    color: 'black',
  },
  forgot: {
    color: 'black',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#fb5b5a',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,

    elevation: 16,
  },
  loginText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signup: {
    color: 'black',
    fontSize: 11,
  },
});

export default Login;
