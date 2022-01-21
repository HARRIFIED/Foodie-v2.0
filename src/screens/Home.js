import React from 'react';
import { View, 
    Text, 
    Button, 
    StatusBar, 
    ScrollView, 
    Image, StyleSheet, 
    TouchableOpacity 
} from 'react-native';
import TodaySpecial from '../components/TodaySpecial';
import FoodStories from '../components/FoodStories';
// import { useNavigation } from '@react-navigation/native';


const Home = ({ navigation }) => {
  
//    const navigation = useNavigation();

    return (
        <ScrollView style={{
            backgroundColor: '#191414'
            }}>
            <StatusBar 
                backgroundColor='#191414'
                barStyle="light-content"
            />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <View>
                    <Image source={require('../assets/icons/menu.png')} style={styles.img} />
                </View>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Image source={require('../assets/icons/search.png')} style={styles.img} />
                    <View  
                        
                        style={{
                        alignItems: 'center', 
                        justifyContent: 'center',
                        flexDirection: 'row',
                        }}
                    >
                        <TouchableOpacity style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            
                        }}               
                            onPress={() => navigation.navigate("Notifications")}>
                            <Image source={require('../assets/icons/bell.png')}   style={{
                                tintColor: "#dbe892",
                                width: 50,
                                height: 35,
                                resizeMode: "contain",
                                marginLeft: 10,
                                marginTop: 10,
                            }}/>
                            <View style={{
                                marginBottom: 10,
                                backgroundColor: 'red',
                                width: 20,
                                height: 20,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 50,
                                marginRight: 15,
                                marginLeft: -23
                                
                            }}>
                                <Text style={{
                                    color: 'white',

                                }}>3</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                </View>
           </View>
           <View style={{
               flexDirection: 'row',
               marginTop: 20
           }}>
                <TouchableOpacity onPress={() => navigation.push("Profile")}>
                    <Image source={require('../assets/images/avatar6.png')} style={{
                        width: 80,
                        height: 70,
                        borderRadius: 50,
                        marginLeft: 10
                    }} />
                </TouchableOpacity>
                <View style={{ marginTop: 3}} >
                    <Text style={{
                        color: 'white',
                        fontSize: 18,
                        letterSpacing: 1,
                    }}>Good evening,</Text>
                    <Text style={{
                        color: 'white',
                        fontSize: 25,
                        letterSpacing: 1,
                        fontWeight: 'bold',
                    }}>Harri Nicks</Text>
                </View>
           </View>
           <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
            <View style={{
                flexDirection: 'row',
                justifyContent: "space-between",
                marginTop: 13,
            }}>
                    <View style={{
                        backgroundColor: '#383d39',
                        marginLeft: 15,
                        marginTop: 15,
                        marginRight: 15,
                        borderBottomStartRadius: 15,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        width:120,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}>
                      <Text style={{
                            color: 'white',
                            fontSize: 14,
                            letterSpacing: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>MY KITCHEN</Text></View>
                    <View style={{
                        backgroundColor: '#383d39',
                        marginLeft: 15,
                        marginTop: 15,
                        marginRight: 15,
                        borderBottomStartRadius: 15,
                        borderTopRightRadius: 15,
                        borderTopLeftRadius: 15,
                        borderBottomRightRadius: 15,
                        width:70,
                        alignItems: 'center',
                        justifyContent: 'center'
                    
                    }}>
                       <Text style={{
                            color: 'white',
                            fontSize: 14,
                            letterSpacing: 1,
                        }}>GOLD</Text></View>
                    <View style={{
                        backgroundColor: '#383d39',
                        marginTop: 15,
                        borderTopLeftRadius: 15,
                        borderBottomLeftRadius: 15,
                        width:100,
                        height: 30,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 14,
                            letterSpacing: 1,
                        }}>BREAKFAST</Text></View>
                </View>
           </ScrollView>
           <View>
                <View>
                    <Text style={{
                        color: 'white',
                        letterSpacing: 1,
                        fontSize: 20,
                        marginTop: 10,
                        marginLeft: 16,
                        marginBottom: 10,
                        fontWeight: 'bold',
                    }}>Food Stories</Text>
                </View>
                <View style={{
                    flexDirection: 'row'
                }}>
                    <FoodStories />
                </View>

                <View>
                    <Text style={{
                        color: 'white',
                        letterSpacing: 1,
                        fontSize: 20,
                        marginTop: 20,
                        marginLeft: 16,
                        fontWeight: 'bold',
                    }}>Today's Special</Text>
                </View>
                <TouchableOpacity style={{
                    flexDirection: 'row'
                }}>
                    <TodaySpecial />
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    img: {
        tintColor: "#dbe892",
        width: 50,
        height: 35,
        resizeMode: "contain",
        marginLeft: 10,
        marginTop: 10
    }
})

export default Home;