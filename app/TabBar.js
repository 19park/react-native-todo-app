import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabBarItem from './TabBarItem';

const TabBar = ({setType, type}) => (
    <View style={styles.container}>
        <TabBarItem type={type} title="전체" setType={() => setType('전체')} />
        <TabBarItem
            type={type}
            title="대기"
            border
            setType={() => setType('대기')} />
        <TabBarItem
            type={type}
            title="완료"
            border
            setType={() => setType('완료')} />
    </View>
);

const styles = StyleSheet.create({
    container: {
        height: 70,
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#dddddd',
    },
});

export default TabBar;
