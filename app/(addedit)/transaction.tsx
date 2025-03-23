import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import {getPaymentMethods} from "../../services/transaction";
import {Text, TextInput, Button} from 'react-native';
import { useState, useEffect } from "react";
import { Dropdown } from 'react-native-element-dropdown';


export default function Index() {

    const [data, setData] = useState<Array<{label: string, value: string}>>([]);
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);
    const [whatForText, onChangeWhatForText] = React.useState('');
    const [whereAtText, onChangeWhereAtText] = React.useState('');
    
    useEffect(() => {
        const fetchPaymentMethods = async () => {
            const methods = await getPaymentMethods();
            setData(methods);
        };
        
        fetchPaymentMethods();
    }, []);

    return(

        <SafeAreaProvider>
            <SafeAreaView>
                <Text>What for?</Text>
                <TextInput onChangeText={onChangeWhatForText} value={whatForText} placeholder="tell me what"/>

                <Text>Where at?</Text>
                <TextInput onChangeText={onChangeWhereAtText} value={whereAtText} placeholder="tell me where"/>

                <Text>How did you pay for it?</Text>
                <Dropdown data={data} labelField="label" valueField="value" onChange={item => { setValue(item.value); setIsFocus(false); }}/>
            </SafeAreaView>
        </SafeAreaProvider>

    )
    
}