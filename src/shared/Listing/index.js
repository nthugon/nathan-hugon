import styled from 'styled-components';

import Heading from './Heading';
import Subheading from './Subheading';
import List from './List';
import ListItem from './ListItem';
import Text from './Text';
import NoWrap from './NoWrap';
import Link from './Link';

const Listing = styled.div`
  margin: 3% auto;
  padding-bottom: 2%;
  color: #e75a7c;  
  width: 80%;
  font-size: 1.8rem;
  border-bottom: 1px solid #e75a7c;

  @media (min-width: 768px) {
    width: 50%;
    font-size: 2.2rem;
  }
`;

Listing.Heading = Heading;
Listing.Subheading = Subheading;
Listing.List = List;
Listing.ListItem = ListItem;
Listing.Text = Text;
Listing.NoWrap = NoWrap;
Listing.Link = Link;

export default Listing;