import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type PostDescriptionProps = TextProps & {
    value: string
}

export function PostDescription({ value, ...rest }: PostDescriptionProps) {
    return (
        <Text style={styles.description} { ...rest }>
            { value }
        </Text>
    );
}