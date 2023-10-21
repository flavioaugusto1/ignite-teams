import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  justify-content: center;
  align-items: center;
  text-align: center;
`

export const Title = styled.Text`
  color: #FFF;
  padding: 10px;
  font-size: 36px;
  font-weight: bold;
`