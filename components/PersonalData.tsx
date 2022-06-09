import { Button, Form, Input, Spin } from 'antd';
import { FC, useState } from 'react';

const PersonalData: FC = () => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const onFinish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
    }, 3000);
  };

  if (loading) return <Spin size='large' />;
  if (completed) return <h1>Thank you for your order!</h1>;
  return (
    <div className='flex w-full flex-col p-[4%]'>
      <h1 className='text-center text-4xl'>Fill Form</h1>
      <Form wrapperCol={{ span: 14 }} layout='vertical' onFinish={onFinish}>
        <Form.Item
          name='name'
          label='Name and last name'
          rules={[{ required: true, message: 'Please input your name and last name!' }]}
        >
          <Input type='text' />
        </Form.Item>
        <Form.Item name='email' label='E-mail' rules={[{ required: true, message: 'The Please input your E-mail!' }]}>
          <Input type='email' />
        </Form.Item>
        <Form.Item
          name='cardNumber'
          label='Card Number'
          rules={[{ required: true, message: 'Please input your card number!' }]}
        >
          <Input type='number' />
        </Form.Item>
        <Form.Item name='ccv' label='CCV' rules={[{ required: true, message: 'Please input your CCV!' }]}>
          <Input type='number' />
        </Form.Item>
        <Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default PersonalData;
