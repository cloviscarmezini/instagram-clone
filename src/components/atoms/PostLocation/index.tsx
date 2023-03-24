import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type PostLocationProps = TextProps & {
    value: string
}

export function PostLocation({ value, ...rest }: PostLocationProps) {
    return (
        <Text style={styles.postLocation} { ...rest }>
            { value }
        </Text>
    );
}