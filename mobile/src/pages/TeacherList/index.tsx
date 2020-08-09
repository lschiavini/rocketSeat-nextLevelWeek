import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput} from 'react-native'

import styles from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from "@expo/vector-icons";
import AsyncStorage from '@react-native-community/async-storage';


import api from '../../services/api';
import { useFocusEffect } from '@react-navigation/native';

function TeacherList() {
    const [teachers, setTeachers] = useState([]);
    const [favorites, setFavorites] = useState<number[]>([]);

    const [ isFiltersVisibile, setIsFiltersVisibile] = useState(true);
    const [subject, setSubject] = useState('');
    const [week_day, setWeekDay] = useState('');
    const [time, setTime] = useState('');


    function loadFavorites() {
        AsyncStorage.getItem('favorites').then( response => {
            if(response) {

                const favoritedTeachers = JSON.parse(response);
                const favoritedTeachersId = favoritedTeachers.map((teacher: Teacher) =>{
                     return teacher.id;
                });
                setFavorites(favoritedTeachersId);
            }
        });
    }

    useFocusEffect(() => loadFavorites());

    async function handleFiltersSubmit() {
        loadFavorites();
        const response = await api.get('classes', {
            params: {
                subject,
                week_day,
                time,
            }
        });
        setIsFiltersVisibile(false);
        setTeachers(response.data);
    }

    function handleToggleFiltersVisible() {
        setIsFiltersVisibile(!isFiltersVisibile);
    }

    return (
        <View style={styles.container}>
            <PageHeader title="Proffys disponíveis" headerRight={(
                <BorderlessButton onPress={handleToggleFiltersVisible}>
                    <Feather name='filter' size={20} color="#FFF" />
                </BorderlessButton>
            )}>
                {isFiltersVisibile && (
                    <View style={styles.searchForm}>
                        <Text style={styles.label}>Matéria</Text>
                        <TextInput
                            value={subject}
                            onChangeText={text => setSubject(text)}
                            placeholderTextColor='#c1bccc'
                            style={styles.input}
                            placeholder='Qual a matéria?'
                        />
                        <View style={styles.inputGroup}>
                            <View style={styles.inputBlock}>
                                
                                <Text style={styles.label}>Dia da Semana</Text>
                                <TextInput
                                    value={week_day}
                                    onChangeText={text => setWeekDay(text)}
                                    placeholderTextColor='#c1bccc'
                                    style={styles.input}
                                    placeholder='Qual o dia?'
                                />
                            </View>
                            <View style={styles.inputBlock}>
                                <Text style={styles.label}>Horário</Text>
                                <TextInput
                                    value={time}
                                    onChangeText={text => setTime(text)}
                                    placeholderTextColor='#c1bccc'
                                    style={styles.input}
                                    placeholder='Qual a hora?'
                                />
                            </View>
                            
                        </View>
                        <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
                            <Text style={styles.submitButtonText}>
                                Filtrar
                            </Text>

                        </RectButton>
                    </View>
                    )
                }
            </PageHeader>

            <ScrollView
                contentContainerStyle={{
                    paddingHorizontal: 16,
                    paddingBottom: 16,
                }}
                style={styles.teacherList}> 
            {teachers.map((teacher: Teacher) => 
            (
                <TeacherItem 
                    key={teacher.id} 
                    teacher={teacher} 
                    favorited={favorites.includes(teacher.id)}
                />
            )
            )}
            </ScrollView>
        </View>
    )
}

export default TeacherList;
