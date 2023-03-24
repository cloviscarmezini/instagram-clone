import React from 'react';

import {
    View
} from 'react-native';

import { PostAvatar } from '../../atoms/PostAvatar';
import { PostAuthor } from '../../atoms/PostAuthor';

import {
    ProfileIcon
} from '../../../global/styles/icons';

import { styles } from './styles';
import { PostLocation } from '../../atoms/PostLocation';

interface PostHeaderProps {
    username: string;
    location: string;
}

export function PostHeader({ username, location }: PostHeaderProps) {
    return (
        <View style={styles.postHeader}>
            <PostAvatar source={ProfileIcon} />
            <View>
                <PostAuthor value={username} />
                <PostLocation value={location} />
            </View>
        </View>
    );
}