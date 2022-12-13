import React from 'react';
import {
  List, Row, Col, Card, Button
} from 'antd';
import { IPerformer } from 'src/interfaces';
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon
} from '@components/common/base/icons';
import './profile-detail.less';

interface IProps {
  performer: IPerformer;
}

const ListItem = ({ description, title }: any) => (
  <List.Item>
    <Row style={{ width: '100%' }}>
      <Col className="light-text" sm={{ span: 6 }} xs={{ span: 12 }}>
        {title}
      </Col>
      <Col style={{ fontWeight: 'bold' }} sm={{ span: 18 }} xs={{ span: 12 }}>
        {description}
      </Col>
    </Row>
  </List.Item>
);

const ProfileDetail = ({ performer }: IProps) => (
  <div className="performer-profile-list">
    <Row>
      <Col sm={{ span: 12 }} xs={{ span: 24 }}>
        <List itemLayout="horizontal">
          {/* <ListItem description={performer.firstName} title="First Name" />
          <ListItem description={performer.lastName} title="Last Name" /> */}
          <ListItem description={performer.gender} title="Gender" />
          <ListItem
            description={performer.sexualReference}
            title="Sexual Preference"
          />
          <ListItem description={performer.height} title="Height" />
          <ListItem description={performer.weight} title="Weight" />
          <ListItem description={performer.hair} title="Hair" />
          <ListItem description={performer.eyes} title="Eyes" />
          <ListItem description={performer.ethnicity} title="Ethnicity" />
          <ListItem description={performer.pubicHair} title="Pubic hair" />
          <ListItem
            description={
              performer.categories && performer.categories.join(', ')
            }
            title="Categories"
          />
          <ListItem
            description={
              performer.tags && performer.tags.join(', ')
            }
            title="Tags"
          />
          <ListItem description={performer.bust} title="Bust" />
        </List>
        <br />
        <List header={<strong>Public Location Info</strong>}>
          <ListItem description={performer.country} title="Country" />
          <ListItem description={performer.state} title="State" />
          <ListItem description={performer.city} title="City" />
        </List>
        <br />
        <Card title="About me" bordered={false}>
          {performer.aboutMe || '...'}
        </Card>
        <Card title="Social Media Info" bordered={false}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="social-media">
              <Button type="primary" style={{ padding: 5, marginRight: 15 }}>
                <FacebookIcon />
              </Button>
              <a href={performer?.socials?.facebook} target="_blank" rel="noreferrer">{performer?.socials?.facebook}</a>
            </div>
            <div className="social-media">
              <Button type="primary" style={{ padding: 5, marginRight: 15 }}>
                <TwitterIcon />
              </Button>
              <a href={performer?.socials?.twitter} target="_blank" rel="noreferrer">{performer?.socials?.twitter}</a>
            </div>
            <div className="social-media">
              <Button type="primary" style={{ padding: 5, marginRight: 15 }}>
                <InstagramIcon />
              </Button>
              <a href={performer?.socials?.instagram} target="_blank" rel="noreferrer">{performer?.socials?.instagram}</a>
            </div>
          </div>
        </Card>
      </Col>
    </Row>
  </div>
);
export default ProfileDetail;
