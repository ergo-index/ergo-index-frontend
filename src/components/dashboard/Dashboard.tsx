import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Form, Input, Modal } from 'antd';
import { useForm } from 'antd/es/form/Form';

import { clearErrMsgAction, logIn, loginFailAction } from '../../state/ducks/user/UserDuck';
import { RootState } from '../../state/store';
import Portfolio from '../portfolio/Portfolio';
import PortfolioHeaders from '../portfolio/PortfolioHeaders';
import './Dashboard.scss';

/**
 * The main dashboard for logged in users.
 */
const Dashboard = () => {
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
        <div>
            Dashboard
            <div>
                <Button>Create Index</Button>

                <br /><br /><br />

                <PortfolioHeaders />
                <Portfolio />

                <Button onClick={showModal}>Login</Button>
                
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
            </div>
        </div>
    );
};

export default Dashboard;
