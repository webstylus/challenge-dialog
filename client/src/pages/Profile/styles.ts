import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
`;

export const Title = styled.h1`
  font-size: 20px;
`;

export const SubTitle = styled.p`
  font-size: 14px;
`;

export const HeaderContainer = styled.div`
  background: rgb(255, 255, 255);
  background: linear-gradient(
    120deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(226, 226, 226, 1) 57%,
    rgba(195, 195, 195, 1) 100%
  );
  box-shadow: #666 1px 1px 4px 0;

  padding: 1rem;
  display: grid;
  grid-template-columns: 100px 1fr;
  grid-column-gap: 1rem;
  border-bottom-left-radius: 50px;
  border-top-right-radius: 50px;
`;
export const Image = styled.img`
  border: 0.1rem solid #999;
  padding: 1px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;
export const ProfileContainer = styled.div``;
export const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 1rem;
`;
export const FriendTitle = styled.h2`
  font-size: 24px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
`;
