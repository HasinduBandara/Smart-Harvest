import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Form, Input, Button, Select, Card, message } from 'antd';
import Title from 'antd/es/typography/Title';
import axios from 'axios';

const { Option } = Select;

const Profile = () => {
    const id = localStorage.getItem("email") // Assuming you're getting the user id from URL
    const [user, setUser] = useState(null);
    const [form] = Form.useForm();
    const navigate = useNavigate()
    useEffect(() => {
        axios.get(`http://localhost:4000/api/users/get-by-email/${id}`).then(res => {
            setUser(res.data.user[0]);


            form.setFieldsValue({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                role: user.role,
                gender: user.gender
            });
        }).catch(err => {
            console.log("getch user failed")
        })

    }, [id, form]);

    if (!user) return <div>Loading...</div>;

    const onFinish = async (values) => {

        console.log(values)

        await axios.put(`http://localhost:4000/api/users/${user._id}`,values).then((val) => {

            message.success("Profile updated succesfully")

            //window.location.reload()
        }).catch(err => {
            message.error("Update profile failed " + err)
        })
    };

    return (
        <div
            style={{
                padding: 16,
                width: "100%",
            }}
        >
            <Card
                style={{
                    margin: "16px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Title style={3}>Profile</Title>
                <Form

                    form={form}
                    name="register"
                    onFinish={onFinish}
                    initialValues={{
                        firstName: user.firstName,
                        lastName: user.lastName,
                        email: user.email,
                        role: user.role,
                        gender: user.gender
                    }}
                    style={{ minWidth: '600px' }}
                >
                    <Form.Item
                        label="First Name"
                        name="firstName"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input placeholder="First Name" />
                    </Form.Item>

                    <Form.Item
                        label="Last Name"
                        name="lastName"
                        rules={[{ required: true, message: 'Please input your last name!' }]}
                    >
                        <Input placeholder="Last Name" />
                    </Form.Item>

                    <Form.Item
                        label="Email"
                        name="email"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="Email" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                        <Button
                            onClick={async (e) => {
                                await axios.delete(`http://localhost:4000/api/users/${user._id}`)
                                localStorage.clear()
                                navigate("/Login")
                            }}
                            style={{ marginLeft: '10px' }}>
                            Delete
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
};

export default Profile;
