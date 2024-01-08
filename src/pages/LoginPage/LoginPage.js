import React from "react";
import "./LoginPage.scss";
import { Divider, Form, Input } from "antd";
import FormItem from "antd/es/form/FormItem";
import Button from "../../components/Button/Button";
export default function LoginPage() {
  return (
    <main id="login__new">
      <div className="login__container">
        <div className="login__left">
          <div className="login__content">
            <h1 className="login-heading">Welcome to monday.com</h1>
            <p className="login-text">
              Get started - it's free. No credit card needed.
            </p>
            <div className="form_content">
              <Button className="btn_google" type="submit">
                <img
                  className="icon-google w-5 h-5 mr-2"
                  src="https://dapulse-res.cloudinary.com/image/upload/remote_logos/995426/google-icon.svg"
                  alt="logo Google"
                />
                Continue with Google
              </Button>
              <Divider className="text-gray-400">Or</Divider>
              <Form>
                <FormItem>
                  <Input
                    className="form-input"
                    type="text"
                    placeholder="name@company.com"
                  ></Input>
                </FormItem>
                <button className="form-submit w-[50%]" type="submit">
                  Continue
                </button>
              </Form>
              <div className="login__agree">
                <p>By proceeding, you agree to the</p>
                <a
                  href="https://monday.com/l/legal/tos/"
                  alt="Terms of Service"
                >
                  Terms of Service
                </a>
                <span> and </span>
                <a
                  href="https://monday.com/l/privacy/privacy-policy/"
                  alt="Privacy Policy
"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
            <div className="login__footer">
              Already have an account? <a href="">Log in</a>
            </div>
          </div>
        </div>
        <div className="login__right">
          <img
            className="login-image"
            src="https://dapulse-res.cloudinary.com/image/upload/monday_platform/signup/signup-right-side-assets-new-flow/welcome-to-monday.png"
          />
        </div>
      </div>
    </main>
  );
}
