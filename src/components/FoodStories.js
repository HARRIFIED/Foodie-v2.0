import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import Loader5 from './Loader5';


const FoodStories = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchSpecial = async () => {
     try {
        const response = await fetch('http://192.168.43.188:5000/api/products?category=stories');
        const json = await response.json();
        setData(json);
    } catch (error) {
        alert(error);
    } finally {
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchSpecial();
  }, []);
  

  return (
    <View style={{  }}>
      {isLoading ? <Loader5 style={{margin: 20}}/> : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={data}
          keyExtractor={( item, index) => item._id}
          renderItem={({ item }) => (
          <TouchableOpacity style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 2
          }}
          activeOpacity={0.9}>
          <View
            style={{
              width: 150,
              height: 150,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              backgroundColor: '#870c2d',
              borderRadius: 70,
              margin: 10,
              elevation: 5,
              zIndex: 3,
              elevation: 10,
            }}>
            <Image source={{uri: item.img}} style={{
              width: '100%',
              height: '100%',
              resizeMode: 'cover',
              borderRadius: 90,
            
            }}/>
          </View>
          
        </TouchableOpacity>          
        )}
        />
      )}
    </View>
  );
};

export default FoodStories;