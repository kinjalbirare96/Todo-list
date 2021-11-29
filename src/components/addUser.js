import { Col, Row } from "antd";
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./index";

const AddUser = ({ handleSubmitUserData }) => {

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = data => {
    handleSubmitUserData(data)
    reset()
  }

  return (
    <div className="add user">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Row>
          <Col span={20} >
            <Input name={'firstName'} label="FirstName" register={register} required />
          </Col>
          <Col span={20} >
            <Input name={'lastName'} label="LastName" register={register} required />
          </Col>
          <Col span={20} >
            <Input name={'email'} label="EmailAddress" register={register} required />
          </Col>
          <Col span={20} >
            <input type="submit" />
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default AddUser;