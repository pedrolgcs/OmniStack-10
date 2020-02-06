import Lottie from 'lottie-react-native';
import MapView from 'react-native-maps';
import styled from 'styled-components/native';

export const Map = styled(MapView)`
  flex: 1;
`;

export const Avatar = styled.Image`
  width: 54px;
  height: 54px;
  border-radius: 27px;
  border-width: 4px;
  border-color: #fff;
`;

export const DevProfile = styled.View`
  width: 260px;
`;

export const DevName = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const DevBio = styled.Text`
  color: #666;
  margin-top: 5px;
`;

export const DevTechs = styled.Text`
  margin-top: 5px;
`;

export const SearchForm = styled.View`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  z-index: 5;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholderTextColor: '#999',
})`
  flex: 1;
  height: 50px;
  background-color: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0px 20px;
  font-size: 16px;
`;

export const SearchButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  background-color: #8e4dff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const TextButton = styled.Text``;

export const LoadingContainer = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Loading = styled(Lottie)`
  background: #7159c1;
`;

export const ErrorMessage = styled.Text`
  padding: 10px 0;
  font-size: 20px;
  justify-content: center;
  align-items: center;
  color: #7159c1;
`;
