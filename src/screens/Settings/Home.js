import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';

export default function Home({navigation}) {
  const Menus = [
    {
      title: 'Account',
      desc: 'Preview and edit your account',
      link: 'Setting Language',
    },
    {
      title: 'Privacy and setting',
      desc: 'Manage your account privacy',
      link: 'Setting Language',
    },
    {
      title: 'Color Theme',
      desc: 'Manage your app theme',
      link: 'Setting Language',
    },
    {
      title: 'Data Usage',
      desc: 'Limit data usage',
      link: 'Setting Language',
    },
    {
      title: 'About',
      desc: 'Infromation about application',
      link: 'Setting Language',
    },
    {
      title: 'Language',
      desc: 'Change language',
      link: 'Setting Language',
    },
    {
      title: 'Logout',
      desc: 'Quit from app',
      link: 'Setting Language',
    },
  ];

  const SettingCard = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate(item.link)}
        style={styles.cardContainer}>
        <View style={styles.profileBg}>
          <Text style={styles.logo}>{item.title.substring(0, 1)}</Text>
        </View>
        <View>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.desc}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <ScrollView style={styles.container}>
      <Header title={'Setting and privacy'} />
      {Menus?.map((item, index) => (
        <SettingCard key={index} item={item} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  cardContainer: {
    padding: 16,
    flexDirection: 'row',
    // alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 12,
    borderColor: '#EBEAF8',
  },
  profileBg: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    marginRight: 16,
    backgroundColor: '#C3C2DF',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    fontFamily: 'Urbanist-Bold',
    color: '#494CA2',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 16,
    color: '#394D6F',
    fontFamily: 'Urbanist-Bold',
  },
  desc: {
    fontSize: 13,
    color: '#A5AEBD',
    fontFamily: 'Urbanist-Regular',
  },
});
