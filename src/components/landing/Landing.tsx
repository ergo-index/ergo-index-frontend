import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import QueueAnim from 'rc-queue-anim';

import { clearErrMsgAction, logIn, loginFailAction } from '../../state/ducks/user/UserDuck';
import { RootState } from '../../state/store';
import './Landing.scss';

/**
 * The main dashboard for logged in users.
 */
const Landing = () => {
    const dispatch = useDispatch();
    const [form] = useForm();
    const [modalVisible, setModalVisible] = useState(false);
    const { errMsg, loginLoading, jwtAxiosId } = useSelector(
        (state: RootState) => state.userState
    );

    function showModal() {
        dispatch(clearErrMsgAction());
        setModalVisible(true);
    }

    function handleLoginSubmit() {
        form
            .validateFields()
            .then(values => {
                dispatch(logIn(values.email, values.password, jwtAxiosId));
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    function handleCancel() {
        setModalVisible(false);
        form.resetFields();
        dispatch(loginFailAction(""));
    }
    
    return (
        <>
            <div className="landing0">
                <QueueAnim
                    key="QueueAnim"
                    type={['bottom', 'top']}
                    delay={200}
                    className="landing0-text-wrapper"
                >
                    <div key="title" className="landing0-title">
                        <img src="/ergo-index.fund_large.png" width="100%" alt="img" />
                    </div>
                    <div key="content" className="landing0-content">
                        ergo-index.fund is a non-custodial platform that enables users to pool their funds together
                        to invest in a portfolio of tokens on the Ergo blockchain.
                    </div>
                    <Button ghost key="button" className="landing0-button" onClick={showModal}>
                        Sign Up
                    </Button>
                </QueueAnim>
            </div>

            <Modal style={{textAlign: "center"}}
                   title="Log in"
                   visible={modalVisible}
                   onOk={handleLoginSubmit}
                   okText="Log in"
                   confirmLoading={loginLoading === 'pending'}
                   onCancel={handleCancel}
                   footer={null}
            >
                {errMsg && <div style={{color: "red"}}>{errMsg}</div>}
                <Form
                    layout="vertical"
                    form={form}
                    name="basic"
                >
                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your email address."
                            }
                        ]}
                    >
                        <Input placeholder="satoshi@ergo-index.fund" />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your password"
                            }
                        ]}
                    >
                        <Input.Password placeholder="password" />
                    </Form.Item>
                    <Button onClick={handleLoginSubmit} type="primary" htmlType="submit" style={{width: "100%"}}>
                        Log in
                    </Button>
                </Form>
            </Modal>
        </>
    );
};

export default Landing;
