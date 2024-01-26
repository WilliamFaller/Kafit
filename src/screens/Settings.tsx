import React, { useEffect, useState } from 'react';
import { View, Text, Button, Center, CheckIcon, FormControl, Select } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Settings() {
  // Estado para armazenar o treino selecionado
  const [selectedTraining, setSelectedTraining] = useState('');
  const defaultTraining = "0";

  // Função para lidar com a seleção de treino
  const handleTrainingSelection = (value:string) => {
    setSelectedTraining(value);
  };

  const fetchData = async () => {
    try {
      // Tenta recuperar o treino armazenado, se não existir, usa o treino padrão
      const storedTraining = await AsyncStorage.getItem('selectedTraining1') || defaultTraining;

      // Atualiza o estado com o dado recuperado ou o treino padrão
      setSelectedTraining(storedTraining);
    } catch (error) {
      console.error('Erro ao recuperar os dados:', error);
    }
  };

  // Função para salvar os dados na memória do dispositivo
  const saveData = async () => {
    try {
      // Salva os dados no AsyncStorage
      await AsyncStorage.setItem('selectedTraining1', selectedTraining);
      const storedTraining = await AsyncStorage.getItem('selectedTraining1') || defaultTraining;
      alert(`Seu novo treino é ${storedTraining}`);
    } catch (error) {
      console.error('Erro ao salvar os dados:', error);
    }
  };

  useEffect(() => {
    // Ao montar o componente, verifica se já existe um treino armazenado
    fetchData();
  }, []);

  return (
    <View>
      <Center mt={12}>
        
       <Text color="gray.200" fontSize={14}>
          Settings
        </Text>
        <FormControl w="3/4" maxW="300" isRequired isInvalid isReadOnly>
          <FormControl.Label><Text fontSize={16} color="white">Escolha seu treino </Text></FormControl.Label>
          <Select
            minWidth="200"
            color="white"
            fontSize={16}
            accessibilityLabel="Choose Service"
            placeholder="Selecione seu treino"
            _selectedItem={{
              bg: 'teal.600',
              endIcon: <CheckIcon size={5} />,
            }}
            mt="1"
            onValueChange={(itemValue) => handleTrainingSelection(itemValue)}
            selectedValue={selectedTraining}
          >
            <Select.Item label="Treino ABC 1 F" value="abc1f" />
            <Select.Item label="Treino ABC 2 F" value="abc2f" />
            <Select.Item label="Treino ABC 1 M" value="abc1m" />
            <Select.Item label="Treino ABC 2 M" value="abc2m" />
          </Select>
          <Button mt={4} bg="red.500" onPress={saveData}><Text fontSize={16} color="white">Salvar</Text></Button>
        </FormControl>
      </Center>
    </View>
  );
}
