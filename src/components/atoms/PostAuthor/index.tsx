import React from 'react';
import { Text, TextProps } from 'react-native';

import { styles } from './styles';

type PostAuthorProps = TextProps & {
    value: string
}

export function PostAuthor({ value, ...rest }: PostAuthorProps) {
    return (
        <Text style={styles.postUsername} { ...rest }>
            { value }
        </Text>
    );
}