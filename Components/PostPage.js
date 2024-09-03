import React, { useState } from "react";
import { Container, Header } from "semantic-ui-react";
import PostTypeSelector from "./PostTypeSelector";
import QuestionForm from "./QuestionForm";
import ArticleForm from "./ArticleForm";
import './PostPage.css';

const PostPage = () => {

    const [postType, setPostType] = useState('');

    return (
        <Container>
            <Header className = "PostHeader">Create a New Post</Header>
            <PostTypeSelector onSelect={setPostType}/>
            {postType === 'question' && <QuestionForm/>}
            {postType === 'article' && <ArticleForm/>}
        </Container>
    );
};

export default PostPage;