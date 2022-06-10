import { Button, Form, Input, Spin } from 'antd';
import { FC, useState } from 'react';
import { useRecoilState } from 'recoil';
import { toPayState } from '../context';
import { checkPayment, sendEmail } from '../utils';

const PersonalDataForm: FC = () => {
  const [toPay] = useRecoilState(toPayState);
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');
  const [completed, setCompleted] = useState(false);
  const onFinish = async (value: any) => {
    setLoading(true);
    setLoadingMessage('Processing Payment...');
    const payed = await checkPayment(value.name, value.email, value.cardNumber, toPay, value.ccv);
    if (!payed) {
      setLoadingMessage('Payment Failed');
      return;
    }
    setLoadingMessage('Payment Success! Sending Email...');

    const sent = await sendEmail(value.name, value.email, toPay);
    if (!sent) {
      setLoadingMessage('Can not send Email');
      setLoading(false);
      return;
    }
    setLoading(false);
    setCompleted(true);
  };

  if (loading)
    return (
      <div className='flex h-1/4 flex-col items-center'>
        <h1>{loadingMessage}</h1>
        <Spin size='large' />;
      </div>
    );
  if (completed) return <h1 className='h-[10vh] text-4xl text-emerald-500'>Thank you for your order!</h1>;
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

export default PersonalDataForm;
