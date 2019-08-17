import styled from 'styled-components';

import Heading from './Heading';
import Subheading from './Subheading';
import List from './List';
import ListItem from './ListItem';
import Text from './Text';
import NoWrap from './NoWrap';
import Link from './Link';
import Divider from './Divider';
import IconContainer from './IconContainer';

const Listing = styled.div`
  text-align: center;
  margin: 0 auto;
  padding-top: 20px;
  color: #e75a7c;  
  width: 80%;
  font-size: 1.8rem;

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
Listing.Divider = Divider;
Listing.IconContainer = IconContainer;

export default Listing;