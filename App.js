import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import Login from './component/Login';
import Trangchu from './component/Trangchu';
import Detail from './component/Detail';
import Signup from './component/Signup';
import Cart from './component/Cart';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
 function LoginScreen({ navigation }) {
   return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
         title="Đăng nhập"
         onPress={() => navigation.navigate('Trangchu')}
       />
     </View>
   );
   }

   function TrangchuScreen({ navigation }) {
     return (
       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
           title="Go to Details... again"
           onPress={() => navigation.push('Danhmuc')}
         />
       </View>
     );
   }
    function SignupScreen({ navigation }) {
     return (
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Details... again"
           onPress={() => navigation.push('Signup')}
         />
      </View>
     );
   }
   function DetailetailScreen({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
         title="Go to Details... again"
          onPress={() => navigation.push('Detail')}
        />
     </View>
    );
  }

  function CartScreen({ navigation }) {
    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Button
         title="Go to Details... again"
          onPress={() => navigation.push('Cart')}
        />
     </View>
    );
  }

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
  export default function App() {
    return (
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" options={{title:"Đăng nhập"}}component={Login} />
        <Stack.Screen name="Trangchu" options={{title:"Trang chủ"}} component={Trangchu} />
        <Stack.Screen name="Signup" options={{title:"Đăng ký"}}component={Signup} />
        <Stack.Screen name="Detail" component={Detail} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
