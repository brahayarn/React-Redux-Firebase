import { Item, SegmentGroup, Segment, ItemGroup, Icon, List, Button } from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";

export default function EventListItem() {
  return (
    <SegmentGroup>

      <Segment>
        <ItemGroup>
          <Item>
            <Item.Image size="tiny" circular src='/user.png'/>
            <Item.Content>
              <Item.Header content="Event Title"/>
              <Item.Description content="Hosted by me"/>
            </Item.Content>
          </Item>
        </ItemGroup>
      </Segment>

      <Segment>
        <span>
          <Icon name="clock"/> Date
          <Icon name="marker"/> Venue
        </span>
      </Segment>

      <Segment secondary>
        <List horizontal>
          <EventListAttendee/>
          <EventListAttendee/>
          <EventListAttendee/>
        </List>
      </Segment>

      <Segment clearing>
        <span>
          Description of the event
        </span>
        <Button color="teal" floated="right" content="View"/>
      </Segment>
      
    </SegmentGroup>
  )
}