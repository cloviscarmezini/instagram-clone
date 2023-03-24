import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type PostLikedProps = TextProps & {
    value: string
}

export function PostLiked({ value, ...rest }: PostLikedProps) {
    return (
        <Text style={styles.likes} { ...rest }>
            { value }
        </Text>
    );
}