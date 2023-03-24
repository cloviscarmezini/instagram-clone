import React from 'react';

import {
    View,
    ImageSourcePropType
} from 'react-native';


import { PostDescription } from '../../atoms/PostDescription';
import { PostPhoto } from '../../atoms/PostPhoto';

import { PostAbout } from '../../molecules/PostAbout';
import { PostHeader } from '../../molecules/PostHeader';
import { PostOptions } from '../../molecules/PostOptions';

import { styles } from './styles';

interface ProfileProps {
    id: string;
    name: string;
    avatar: ImageSourcePropType;
}

export interface PostProps {
    id: string;
    username: string;
    location: string;
    likes: string;
    cover: ImageSourcePropType;
    description: string;
    lastLiked: ProfileProps;
}

interface Props {
    data: PostProps
}

export function Post({ data }: Props) {
    return (
        <View style={styles.post}>
            <PostHeader
                username={data.username}
                location={data.location}
            />

            <PostPhoto source={data.cover} />

            <View style={styles.postFooter}>
                <PostOptions />

                <PostAbout
                    likes={data.likes}
                    avatar={data.lastLiked.avatar}
                />
                <PostDescription value={data.description} />
            </View>
        </View>
    );
}