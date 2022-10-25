import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import Header from '../../components/molecules/Header';
import {useTranslation} from 'react-i18next';

export default function Home({navigation}) {
  const {t} = useTranslation();

  const Menus = [
    {
      title: t('account.title'),
      desc: t('account.desc'),
      link: 'Setting Account',
    },
    {
      title: t('privacy.title'),
      desc: t('privacy.desc'),
      link: 'Setting Privacy',
    },
    {
      title: t('theme.title'),
      desc: t('theme.desc'),
      link: 'Setting Theme',
    },
    {
      title: t('data-usage.title'),
      desc: t('data-usage.desc'),
      link: 'Setting Data',
    },
    {
      title: t('about.title'),
      desc: t('about.desc'),
      link: 'Setting About',
    },
    {
      title: t('language.title'),
      desc: t('language.desc'),
      link: 'Setting Language',
    },
    {
      title: t('logout.title'),
      desc: t('logout.desc'),
      link: 'Logout',
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
      <Header title={t('headerSettingHome')} />
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
