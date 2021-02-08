import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import StyledButton from '../StyledButton';

const carItem = (props) => {

    const {name, price, image, taglineCTA} = props.car;
    return(
        <View style = {styles.carContainer}>
            <ImageBackground 
                source= {image}
                style={styles.image}
            />

            <View style ={ styles.titles}>
                <Text style ={ styles.title}> {name} </Text>
                <Text style ={ styles.subtitle}> 
                    {price}
                    {' '}
                    <Text style={styles.taglineCTA}> 
                        {taglineCTA}
                    </Text>
                </Text>
            </View>

            <View style={styles.buttons}>
                <StyledButton 
                    type='primary' 
                    content ={'Custom Order'} 
                    onPress={() =>{
                        console.log('Custom order')
                    }}/>

                <StyledButton 
                    type='secondary' 
                    content ={'Existing Inventory'} 
                    onPress={() =>{
                        console.log('Existing Inventory')
                    }}/>
            </View>
        </View>
    )
}

export default carItem;