import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import Loader5 from './Loader5';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/reduxslices/productsSlice';

const TodaySpecial = () => {

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products)
  // console.log(products.item);
  const [isLoading, setLoading] = useState(true);
  

  useEffect(() => {
    dispatch(getProducts());
    setLoading(false);
  }, [dispatch])
//  console.log(products)

  return (
    <View style={{  }}>
      {isLoading ? <Loader5 style={{margin: 20}}/> : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          data={products.item}
          keyExtractor={( item, index) => item._id}
          renderItem={({ item }) => (
        <TouchableOpacity style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 2
        }}
        activeOpacity={0.9}
        onPress={() => navigation.push("Details", {item})}
        >
         
        <View
          style={{
            width: 140,
            height: 140,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#211f1f',
            borderRadius: 70,
            margin: 10,
            elevation: 5,
            zIndex: 3,
            elevation: 10,
          }}>
          <Image source={{uri: item.img}} style={{
            width: '100%',
            height: '100%',
            resizeMode: 'contain',
          }}/>
        </View>
        <View style={{
          backgroundColor: '#383d39',
          elevation: 5,
          height: 100,
          width: 240,
          opacity: 0.8,
          marginLeft: -95,
          zIndex: 1,
          borderTopLeftRadius: 40,
          borderBottomLeftRadius: 40,
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20
        }}>
          <View style={{
            marginTop: 3,
            marginLeft: 100,
            marginBottom: 2
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '700',
              fontStyle: 'italic',
              color: 'white',
              marginBottom: 2
              
            }}>{item.title}</Text>
            
          </View>
          <View style={{
            marginLeft: 100,
            borderBottomEndRadius: 20,
          }}>
            <Text style={{
              color: 'white', 
              fontSize: 20, 
              fontWeight: 'bold',
              marginBottom: 2,
            }}
              >${item.price}</Text>
            <Image source={require('../assets/icons/add.png')} style={{
                tintColor: "#dbe892",
                width: 40,
                height: 30,
                resizeMode: "contain",
                
            }}/>
          </View>
        </View>
      </TouchableOpacity>          )}
        />
      )}
    </View>
  );
};

export default TodaySpecial;