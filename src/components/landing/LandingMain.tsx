import React, { useState } from 'react';
import { Button, Form, Input, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';

import {
  auth,
  useSignInWithEmailAndPassword,
  useCreateUserWithEmailAndPassword,
} from '../../firebase';
import Landing0 from './Landing0';
import Landing1 from './Landing1';
import Landing2 from './Landing2';
import Landing3 from './Landing3';
import LandingNav from '../nav/LandingNav';
import './Landing0.scss';
import './common.scss'

/**
 * The landing page for unauthenticated users.
 */
const Landing = () => {
    const [loginForm] = useForm();
    const [signUpForm] = useForm();
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [signUpModalVisible, setSignUpModalVisible] = useState(false);
    const [
        signInWithEmailAndPassword,
        ,
        signInLoading,
        signInError,
    ] = useSignInWithEmailAndPassword(auth);
    const [
        createUserWithEmailAndPassword,
        ,
        signUpLoading,
        signUpError,
    ] = useCreateUserWithEmailAndPassword(auth);

    function showLoginModal() {
        setLoginModalVisible(true);
    }

    function showSignUpModal() {
        setSignUpModalVisible(true);
    }

    const handleLoginSubmit = () => {
        loginForm
            .validateFields()
            .then(values => {
                signInWithEmailAndPassword(values.email, values.password);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    };

    function handleSignUpSubmit() {
        signUpForm
            .validateFields()
            .then(values => {
                createUserWithEmailAndPassword(values.email, values.password);
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    function handleCancelLogin() {
        setLoginModalVisible(false);
        loginForm.resetFields();
    }

    function handleCancelSignUp() {
        setSignUpModalVisible(false);
        signUpForm.resetFields();
    }

    return (
        <>
            <LandingNav
                onClickLogin={showLoginModal}
                onClickSignUp={showSignUpModal}
            />
            <Landing0 showModal={showSignUpModal} />

            <Landing1 />
            <Landing2 />
            <Landing3 />

            <Modal style={{ textAlign: "center" }}
                title="Log In"
                visible={loginModalVisible}
                onOk={handleLoginSubmit}
                okText="Log in"
                confirmLoading={signInLoading}
                onCancel={handleCancelLogin}
                footer={null}
            >
                {signInError && <div style={{ color: "red" }}>{JSON.stringify(signInError)}</div>}
                <Form
                    requiredMark={false}
                    layout="vertical"
                    form={loginForm}
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
                    <Button loading={signInLoading} onClick={handleLoginSubmit} type="primary" htmlType="submit" style={{ width: "100%" }}>
                        Log in
                    </Button>
                </Form>
            </Modal>

            <Modal style={{ textAlign: "center" }}
                title="Sign Up"
                visible={signUpModalVisible}
                onOk={handleSignUpSubmit}
                okText="Sign Up"
                confirmLoading={signUpLoading}
                onCancel={handleCancelSignUp}
                footer={null}
            >
                {signUpError && <div style={{ color: "red" }}>{JSON.stringify(signUpError)}</div>}
                <Form
                    requiredMark={false}
                    layout="vertical"
                    form={signUpForm}
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
                    <Button onClick={handleSignUpSubmit} type="primary" htmlType="submit" style={{ width: "100%" }}>
                        Sign Up
                    </Button>
                </Form>
            </Modal>
        </>
    );
};

export default Landing;
