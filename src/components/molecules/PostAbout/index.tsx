import React from 'react';

import {
    View,
    ImageSourcePropType
} from 'react-native';

import { PostLiked } from '../../atoms/PostLiked';
import { PostLikedAvatar } from '../../atoms/PostLikedAvatar';

import { styles } from './styles';

interface PostAboutProps {
    avatar: ImageSourcePropType;
    likes: string;
}

export function PostAbout({ avatar, likes }: PostAboutProps) {
    return (
        <View style={styles.postAbout}>
            <PostLikedAvatar source={ avatar } />
            <PostLiked value={likes} />
        </View>
    );
}