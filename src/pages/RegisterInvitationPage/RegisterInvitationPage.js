import React from "react";
import { Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Button from "../../components/Button/Button";
import "./RegisterInvatation.scss";
function RegisterInvitationPage() {
  return (
    <main id="register_invitation">
      <div className="invitation__container">
        <div className="invitation__left">
          <div className="invitation__content">
            <div className="content__top">
              <img
                className="invitation__logo"
                src="https://cdn.monday.com/images/logos/logo-full-big.png"
                alt="logo-monday.com"
              />
            </div>

            <div className="content__body mb-20">
              <h3 className="heading">Create your account</h3>
              <Form layout="vertical">
                <FormItem
                  className="mb-[1.7rem]"
                  label="Full name"
                  name={"fullname"}
                  rules={[
                    {
                      required: {
                        value: true,
                        message: "Enter your full name",
                      },
                    },
                  ]}
                >
                  <Input
                    className="form-input"
                    type="text"
                    placeholder="Enter your full name"
                  ></Input>
                </FormItem>
                <FormItem
                  className="mb-[1.7rem]"
                  label="Password"
                  name={"password"}
                  rules={[
                    {
                      required: {
                        value: true,
                        message: "Enter your full Password",
                      },
                    },
                  ]}
                >
                  <Input.Password
                    className="form-input"
                    placeholder="Enter at least 8 characters"
                  ></Input.Password>
                </FormItem>

                <FormItem
                  className="mb-[1.7rem]"
                  label="Account name"
                  name={"accountName"}
                  rules={[
                    {
                      required: {
                        value: true,
                        message: "Enter your full account name",
                      },
                    },
                  ]}
                >
                  <Input
                    className="form-input"
                    type="text"
                    placeholder="For example, company's or department's name"
                  ></Input>
                </FormItem>
              </Form>
            </div>
            <div className="content__footer">
              <Button disable={true} type="button">
                Continue
                <i className="fa-solid fa-angle-right mx-2"></i>
              </Button>
            </div>
          </div>
        </div>
        <div className="invitation__right">
          <img
            className="invitation-image w-full h-full"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/set-up-your-account.png"
            alt="register_invitation"
          />
        </div>
      </div>
    </main>
  );
}

export default RegisterInvitationPage;
