import React from 'react'
import { View, Text } from 'react-native'


import styles from './styles';
import PageHeader from '../../components/PageHeader';

function Favourites() {
    return (
        <View style={styles.container}>
            <PageHeader title="Meus Proffys favoritos" />
        </View>
    )
}

export default Favourites;
