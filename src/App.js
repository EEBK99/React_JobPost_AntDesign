import React from "react";
import {
  DatePicker,
  Space,
  Row,
  Col,
  Typography,
  Divider,
  Steps,
  message,
  Form,
  Input,
  Switch,
  Select,
  Upload,
  TimePicker,
} from "antd";
import { CloseOutlined, UploadOutlined } from "@ant-design/icons";
import Button from "antd-button-color";
import "./App.css";

// for select
const { Option } = Select;

// for text area
const { TextArea } = Input;

// for typography i.e title and texts
const { Title, Text } = Typography;

// for uploading file
const props = {
  name: "file",
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  headers: {
    authorization: "authorization-text",
  },
  onChange(info) {
    if (info.file.status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      message.success(`${info.file.name} File uploaded successfully!`);
    } else if (info.file.status === "error") {
      message.error(`${info.file.name} File upload failed!`);
    }
  },
};

// for steps
const { Step } = Steps;
const steps = [
  {
    title: "Job Information",
    stepsNumber: (
      <Text strong style={{ color: "rgb(43, 158, 224)" }}>
        Step 1 of 3
      </Text>
    ),
    content: (
      <>
        <Form name="step1form">
          <Row>
            <Col span={11}>
              <Form.Item
                name="Looking for"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Looking for">
                  <Option value="internee">Internee</Option>
                  <Option value="partTime">Part Time</Option>
                  <Option value="fullTime">Full Time</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={2}></Col>

            <Col span={11}>
              <Form.Item
                name="Experience"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Experience">
                  <Option value="1">0 to 1 Year</Option>
                  <Option value="2">1 to 2 Year</Option>
                  <Option value="3">2 to 3 Year</Option>
                  <Option value="4">3 to 4 Year</Option>
                  <Option value="5">4 to 5 Year</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={11}>
              <Form.Item
                name="Education"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Education">
                  <Option value="1">Under Graduated</Option>
                  <Option value="2">Graduated</Option>
                  <Option value="3">Mastered</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col span={13}></Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="Skills"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Skills">
                  <Option value="1">Web Development</Option>
                  <Option value="2">Mobile Application Development</Option>
                  <Option value="3">Desktop Applicaton Development</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row>
            <Col span={24}>
              <Form.Item
                name="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea rows={5} placeholder="Write a Description" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Row>
              <Col span={24} style={{ marginBottom: "5px" }}>
                <Text type="secondary">Add if there is any inspiration</Text>
              </Col>

              <Col span={24}>
                <Upload {...props}>
                  <Button type="success" icon={<UploadOutlined />}>
                    GO TO SELECT TEMPLATE
                  </Button>
                </Upload>
              </Col>
            </Row>
          </Form.Item>

          <Form.Item>
            <Button type="warning" htmlType="submit">
              Done Step 1
            </Button>
          </Form.Item>
        </Form>
      </>
    ),
  },
  {
    title: "Candidate Type",
    stepsNumber: (
      <Text strong style={{ color: "rgb(43, 158, 224)" }}>
        Step 2 of 3{" "}
      </Text>
    ),
    content: (
      <>
        <Form name="step2form">
          <Row>
            <Col span={11}>
              <Form.Item
                name="Hourly rate"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input placeholder="Hourly rate"></Input>
              </Form.Item>
            </Col>

            <Col span={2}></Col>

            <Col span={11}>
              <Form.Item
                name="Expected start date"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <DatePicker placeholder="Expected start date"></DatePicker>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={11}>
              <Form.Item
                name="Career Level"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Career Level">
                  <Option value="internee">Internee</Option>
                  <Option value="partTime">Part Time</Option>
                  <Option value="fullTime">Full Time</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={2}></Col>

            <Col span={11}>
              <Form.Item
                name="Gender"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Select placeholder="Gender">
                  <Option value="1">Male</Option>
                  <Option value="2">Female</Option>
                  <Option value="3">Other</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <Form.Item
                name="Equipment Specification"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <TextArea rows={6} placeholder="Equipment Specification" />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item>
            <Button type="warning" htmlType="submit">
              Done Step 2
            </Button>
          </Form.Item>
        </Form>
      </>
    ),
  },
  {
    title: "Shift Timings",
    stepsNumber: (
      <Text strong style={{ color: "rgb(43, 158, 224)" }}>
        Step 3 of 3
      </Text>
    ),
    content: (
      <>
        <Form name="step3form">
          <Row>
            <Col span={24}>
              <Title level={4} strong>
                Schedule working day & timings
              </Title>
            </Col>
          </Row>

          <Divider />

          <Row>
            <Col span={24}>
              <Space size={[20]} wrap>
                <Form.Item>
                  <Switch
                    checkedChildren="S"
                    unCheckedChildren="S"
                    defaultChecked
                  />
                </Form.Item>

                <Form.Item>
                  <Switch
                    checkedChildren="M"
                    unCheckedChildren="M"
                    defaultChecked
                  />
                </Form.Item>

                <Form.Item>
                  <Switch
                    checkedChildren="T"
                    unCheckedChildren="T"
                    defaultChecked
                  />
                </Form.Item>

                <Form.Item>
                  <Switch
                    checkedChildren="W"
                    unCheckedChildren="W"
                    defaultChecked
                  />
                </Form.Item>

                <Form.Item>
                  <Switch
                    checkedChildren="T"
                    unCheckedChildren="T"
                    defaultChecked
                  />
                </Form.Item>

                <Form.Item>
                  <Switch
                    checkedChildren="F"
                    unCheckedChildren="F"
                    defaultChecked
                  />
                </Form.Item>

                <Form.Item>
                  <Switch
                    checkedChildren="S"
                    unCheckedChildren="S"
                    defaultChecked
                  />
                </Form.Item>
              </Space>
            </Col>
          </Row>

          <Row justify="space-between">
            <Col span={12}>
              <Form.Item>
                <Text
                  strong
                  style={{
                    color: "white",
                    backgroundColor: "rgb(43, 158, 224)",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingLeft: "6px",
                    paddingRight: "32px",
                    borderTopLeftRadius: "15px",
                  }}
                >
                  Sunday
                </Text>
                <TimePicker.RangePicker use12Hours />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item>
                <Text
                  strong
                  style={{
                    color: "white",
                    backgroundColor: "rgb(43, 158, 224)",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingLeft: "6px",
                    paddingRight: "27px",
                    borderTopLeftRadius: "15px",
                  }}
                >
                  Monday
                </Text>
                <TimePicker.RangePicker use12Hours />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <br></br>
            </Col>
          </Row>

          <Row justify="space-between">
            <Col span={12}>
              <Form.Item>
                <Text
                  strong
                  style={{
                    color: "white",
                    backgroundColor: "rgb(43, 158, 224)",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingLeft: "6px",
                    paddingRight: "27px",
                    borderTopLeftRadius: "15px",
                  }}
                >
                  Tuesday
                </Text>
                <TimePicker.RangePicker use12Hours />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item>
                <Text
                  strong
                  style={{
                    color: "white",
                    backgroundColor: "rgb(43, 158, 224)",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingLeft: "6px",
                    paddingRight: "6px",
                    borderTopLeftRadius: "15px",
                  }}
                >
                  Wednesday
                </Text>
                <TimePicker.RangePicker use12Hours />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <br></br>
            </Col>
          </Row>

          <Row justify="space-between">
            <Col span={12}>
              <Form.Item>
                <Text
                  strong
                  style={{
                    color: "white",
                    backgroundColor: "rgb(43, 158, 224)",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingLeft: "6px",
                    paddingRight: "20px",
                    borderTopLeftRadius: "15px",
                  }}
                >
                  Thursday
                </Text>
                <TimePicker.RangePicker use12Hours />
              </Form.Item>
            </Col>

            <Col span={12}>
              <Form.Item>
                <Text
                  strong
                  style={{
                    color: "white",
                    backgroundColor: "rgb(43, 158, 224)",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingLeft: "6px",
                    paddingRight: "40px",
                    borderTopLeftRadius: "15px",
                  }}
                >
                  Friday
                </Text>
                <TimePicker.RangePicker use12Hours />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <br></br>
            </Col>
          </Row>

          <Row justify="space-between">
            <Col span={12}>
              <Form.Item>
                <Text
                  strong
                  style={{
                    color: "white",
                    backgroundColor: "rgb(43, 158, 224)",
                    paddingTop: "6px",
                    paddingBottom: "6px",
                    paddingLeft: "6px",
                    paddingRight: "22px",
                    borderTopLeftRadius: "15px",
                  }}
                >
                  Saturday
                </Text>
                <TimePicker.RangePicker use12Hours />
              </Form.Item>
            </Col>
          </Row>

          <Row>
            <Col span={24}>
              <br></br>
            </Col>
          </Row>

          <Form.Item>
            <Button type="warning" htmlType="submit">
              Done Step 3
            </Button>
          </Form.Item>

          <Row>
            <Col span={24}>
              <br></br>
            </Col>
          </Row>
        </Form>
      </>
    ),
  },
];

function App() {
  // for steps
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <div className="App">
      <Row>
        <Col span={24}>
          <br></br>
        </Col>
      </Row>
      <Row justify="space-around" align="middle">
        <Col
          xs={22}
          sm={22}
          md={18}
          lg={14}
          xl={14}
          style={{
            borderRadius: "20px",
            boxShadow: "5px 10px 18px #888888",
            padding: "20px",
          }}
        >
          <Row justify="space-between">
            <Col span={12}>
              <Title level={3} style={{ color: "rgb(43, 158, 224)" }}>
                CREATE A JOB POST
              </Title>
              <Text>
                Complete the following stpes to create an effective job post
              </Text>
            </Col>
            <Space>
              <Col span={1}>
                <Button
                  type="lightdark"
                  shape="circle"
                  icon={<CloseOutlined />}
                ></Button>
              </Col>
            </Space>
          </Row>

          <Divider />

          <Row>
            <Col span={24}>
              <div
                className="steps-number"
                style={{
                  margin: "10px 10px 10px 0px",
                }}
              >
                {steps[current].stepsNumber}
              </div>

              <Steps current={current}>
                {steps.map((item) => (
                  <Step key={item.title} title={item.title} />
                ))}
              </Steps>

              <Row>
                <Col span={24}>
                  <br></br>
                </Col>
              </Row>

              <div
                className="steps-content"
                style={{
                  margin: "10px 10px 10px 0px",
                }}
              >
                {steps[current].content}
              </div>

              <div className="steps-button">
                <Row justify="space-between">
                  <Col span={12}>
                    {current > 0 && (
                      <Button
                        style={{
                          padding: "0px 50px 0px 50px",
                          marginTop: "10px",
                        }}
                        onClick={() => prev()}
                      >
                        PREVIOUS
                      </Button>
                    )}
                  </Col>
                  <Space>
                    <Col span={1}>
                      {current < steps.length - 1 && (
                        <Button
                          type="primary"
                          style={{
                            padding: "0px 50px 0px 50px",
                            marginTop: "10px",
                          }}
                          onClick={() => next()}
                        >
                          NEXT
                        </Button>
                      )}
                      {current === steps.length - 1 && (
                        <Button
                          type="primary"
                          // htmlType="submit"
                          style={{
                            padding: "0px 50px 0px 50px",
                            marginTop: "10px",
                          }}
                          onClick={() =>
                            message.success("Processing complete!")
                          }
                        >
                          DONE
                        </Button>
                      )}
                    </Col>
                  </Space>
                </Row>
              </div>
              <Row>
                <Col span={24}>
                  <br></br>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <br></br>
        </Col>
      </Row>
    </div>
  );
}

export default App;
