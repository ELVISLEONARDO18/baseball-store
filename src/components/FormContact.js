import React, { useEffect, useState } from "react";
import { Form, Input, Button, Alert } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
  required: "${label} es requerido!",
  types: {
    email: "${label} no es un correo valido!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

export const FormContact = () => {
  const [send, setSend] = useState(false);

  const onFinish = (values) => {
    console.log(values);
    setSend(true);
    // return <Alert message="Enviado con exito" type="success" />;
  };

  useEffect(() => {
    return () => {
      setTimeout(() => {
        window.location.href =
          "https://elvisleonardo18.github.io/baseball-store/";
      }, 2000);
    };
  }, [send]);

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      {send && (
        <Alert
          style={{
            alignSelf: "center",
            justifyContent: "center",
            width: 400,
            position: "absolute",
            right: 0,
            bottom: 20,
          }}
          message="Enviado con exito"
          type="success"
          closable
          onClose={() => setSend(false)}
        />
      )}
      <Form.Item
        name={["user", "name"]}
        label="Nombre"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "asunto"]}
        label="Asunto"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name={["user", "mensaje"]}
        rules={[
          {
            required: true,
          },
        ]}
        label="Mensaje"
      >
        <Input.TextArea />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
      </Form.Item>
    </Form>
  );
};
