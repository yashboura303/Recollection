import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import Post from './Post/Post';
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector(state => state.posts);
    const classes = useStyles();

    if (posts === undefined) {
        return <CircularProgress />;
    }
    return !posts.length ? (
        <h3>No recollections, create one now! </h3>
    ) : (
        <Grid
            className={classes.container}
            container
            alignItems="stretch"
            spacing={3}
        >
            {posts.map(post => (
                <Grid key={post._id} item xs={12} sm={6} md={6}>
                    <Post post={post} setCurrentId={setCurrentId} />
                </Grid>
            ))}
        </Grid>
    );
};

export default Posts;
