import styled from 'styled-components';
import Cube from './Cube';
import Back from './Back';
import Left from './Left';
import Right from './Right';
import Top from './Top';
import Bottom from './Bottom';
import Front from './Front';

const ImageCube = styled.div`
  box-sizing: border-box;
  transition: .3s;
  perspective: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

ImageCube.Cube = Cube;
ImageCube.Back = Back;
ImageCube.Left = Left;
ImageCube.Right = Right;
ImageCube.Top = Top;
ImageCube.Bottom = Bottom;
ImageCube.Front = Front;

export default ImageCube;