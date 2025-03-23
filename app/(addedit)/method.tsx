import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Dropdown } from 'react-native-element-dropdown';
import {Text, TextInput, Button} from 'react-native';
import { useState } from "react";
import {addMethodToDatabase} from "../../services/methods";

const data = [
    { label: 'Credit card', value: '1' },
    { label: 'Debit card', value: '2' },
    { label: 'Checking account', value: '3' },
    { label: 'Savings account', value: '4' },
    { label: 'Online account', value: '5' },
  ];

export default function Index() {

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [text, onChangeText] = React.useState('');

    return(
        <SafeAreaProvider>
            <SafeAreaView>
                <Text>Payment method name</Text>
                <TextInput onChangeText={onChangeText} value={text} placeholder="account name"/>
                <Text>Account type</Text>
                <Dropdown data={data} labelField="label" valueField="value" onChange={item => { setValue(item.value); setIsFocus(false); }}/>
                <Button title="Add Method" onPress={() => addMethodToDatabase(text, value)} />
            </SafeAreaView>
        </SafeAreaProvider>
    )
    
}