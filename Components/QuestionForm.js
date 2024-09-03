import React from 'react';
import { Form, TextArea, Button} from 'semantic-ui-react';

const QuestionForm = () => (
    <Form>
        <Form.Field className="TitleField">
        <label>Title</label>
        <Form.Input placeholder="Start your question with how, what, why, etc." />
      </Form.Field>

      <Form.Field className="ContentField">
        <label>Content</label>
        <TextArea placeholder="Please describe your question here." />
      </Form.Field>

      <Form.Field className="TagField">
        <label>Tags</label>
        <Form.Input placeholder="Please add up to 3 tags to help describe what your question is about eg. Java, C++ etc." />
      </Form.Field>

      <Button type="submit" className="PostButton">Post Article</Button>
    </Form>
);

export default QuestionForm;