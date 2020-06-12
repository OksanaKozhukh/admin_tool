import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Col, Row, Form, Typography, Select, Input } from 'antd';
import 'antd/dist/antd.css';
import { StyledButton } from './style';

const { Title } = Typography;

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

class UpdateTooltipModal extends Component {
  handleUpdateTooltip = (data) => {
    this.props.handleUpdate(data);
    this.props.handleCancel();
  };

  render() {
    const { isUpdateTooltipModalVisible, handleCancel } = this.props;

    return (
      <div>
        <Modal
          centered
          visible={isUpdateTooltipModalVisible}
          onCancel={handleCancel}
          okButtonProps={{ style: { display: 'none' } }}
          cancelButtonProps={{ style: { display: 'none' } }}
        >
          <Row justify='center'>
            <Col span={24}>
              <Title level={2} align='center'>
                {' '}
                Edit tooltip{' '}
              </Title>
              <Form {...layout} onFinish={this.handleUpdateTooltip}>
                <Form.Item
                  label='Placement'
                  name='placement'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select>
                    <Select.Option value='top'>top</Select.Option>
                    <Select.Option value='right'>right</Select.Option>
                    <Select.Option value='bottom'>bottom</Select.Option>
                    <Select.Option value='left'>left</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='Color'
                  name='color'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select>
                    <Select.Option value='red'>red</Select.Option>
                    <Select.Option value='blue'>blue</Select.Option>
                    <Select.Option value='green'>green</Select.Option>
                    <Select.Option value='yellow'>yellow</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item
                  label='Text'
                  name='title'
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item align='center'>
                  <StyledButton type='primary' htmlType='submit'>
                    Update tooltip
                  </StyledButton>
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isUpdateTooltipModalVisible: state.isUpdateTooltipModalVisible,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleCancel: () => {
      dispatch({ type: 'HIDE_MODAL_UPDATE_TOOLTIP' });
    },
    handleUpdate: (data) => {
      dispatch({ type: 'UPDATE_TOOLTIP', data });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateTooltipModal);
