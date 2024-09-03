import React from 'react';
import { Form, TextArea, Button } from 'semantic-ui-react';
import './ArticleForm.css';

const ArticleForm = () => (
  <div className="article-form-container">
    <Form>
      <Form.Field className="TitleField">
        <label>Title</label>
        <Form.Input placeholder="Enter the title of your article" />
      </Form.Field>

      <Form.Field className="AbstractField">
        <label>Abstract</label>
        <TextArea placeholder="Enter a 1 paragraph abstract." />
      </Form.Field>

      <Form.Field className="ContentField">
        <label>Content</label>
        <TextArea placeholder="Please write your article content here" />
      </Form.Field>

      <Form.Field className="TagField">
        <label>Tags</label>
        <Form.Input placeholder="Please add up to 3 tags eg. Java, C++ etc." />
      </Form.Field>

      <Button type="submit" className="PostButton">Post Article</Button>
    </Form>
  </div>
);

export default ArticleForm;
