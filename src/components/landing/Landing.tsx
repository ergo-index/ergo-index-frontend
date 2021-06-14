import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';
import { enquireScreen } from 'enquire-js';

import {clearErrMsgAction, logIn, loginFailAction, signUp} from '../../state/ducks/user/UserDuck';
import { RootState } from '../../state/store';
import Landing0 from './Landing0';
import Landing1 from './Landing1';
import Landing2 from './Landing2';
import Landing3 from './Landing3';
import Nav from './Nav';

import './Landing.scss';

/**
 * The landing page for unauthenticated users.
 */
const Landing = () => {
    const dispatch = useDispatch();
    const [loginForm] = useForm();
    const [signUpForm] = useForm();
    const [loginModalVisible, setLoginModalVisible] = useState(false);
    const [signUpModalVisible, setSignUpModalVisible] = useState(false);
    const { errMsg, loginLoading, signUpLoading, jwtAxiosId } = useSelector(
        (state: RootState) => state.userState
    );

    // Determine if we're on a mobile device or not
    let isMobile: boolean = false;
    enquireScreen((mobile: any) => {
        isMobile = mobile;
    });

    function showLoginModal() {
        dispatch(clearErrMsgAction());
        setLoginModalVisible(true);
    }

    function showSignUpModal() {
        dispatch(clearErrMsgAction());
        setSignUpModalVisible(true);
    }

    function handleLoginSubmit() {
        loginForm
            .validateFields()
            .then(values => {
                dispatch(logIn(values.email, values.password, jwtAxiosId));
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    function handleSignUpSubmit() {
        signUpForm
            .validateFields()
            .then(values => {
                dispatch(signUp(values.email, values.password, values.name, jwtAxiosId));
            })
            .catch(info => {
                console.log('Validate Failed:', info);
            });
    }

    function handleCancelLogin() {
        setLoginModalVisible(false);
        loginForm.resetFields();
        dispatch(loginFailAction(""));
    }

    function handleCancelSignUp() {
        setSignUpModalVisible(false);
        signUpForm.resetFields();
        dispatch(loginFailAction(""));
    }
    
    return (
        <>
            <Nav
                isMobile={isMobile}
                onClickLogin={showLoginModal}
                onClickSignUp={showSignUpModal}
            />
            <Landing0 showModal={showSignUpModal} />
            <Landing1 />
            <Landing2 />
            <Landing3 />


            <Modal style={{textAlign: "center"}}
                   title="Log In"
                   visible={loginModalVisible}
                   onOk={handleLoginSubmit}
                   okText="Log in"
                   confirmLoading={loginLoading === 'pending'}
                   onCancel={handleCancelLogin}
                   footer={null}
            >
                {errMsg && <div style={{color: "red"}}>{errMsg}</div>}
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
                    <Button loading={loginLoading === 'pending'} onClick={handleLoginSubmit} type="primary" htmlType="submit" style={{width: "100%"}}>
                        Log in
                    </Button>
                </Form>
            </Modal>
            {/* <Landing1 /> */}

            <Modal style={{textAlign: "center"}}
                   title="Sign Up"
                   visible={signUpModalVisible}
                   onOk={handleSignUpSubmit}
                   okText="Sign Up"
                   confirmLoading={signUpLoading === 'pending'}
                   onCancel={handleCancelSignUp}
                   footer={null}
            >
                {errMsg && <div style={{color: "red"}}>{errMsg}</div>}
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

                    <Form.Item
                        label="Name"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: "Please enter your name"
                            }
                        ]}
                    >
                        <Input placeholder="Satoshi Nakamoto" />
                    </Form.Item>
                    <Button onClick={handleSignUpSubmit} type="primary" htmlType="submit" style={{width: "100%"}}>
                        Sign Up
                    </Button>
                </Form>
            </Modal>
        </>
    );
};

export default Landing;
