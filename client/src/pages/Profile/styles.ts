import styled from "styled-components";

export const Container = styled.div`
  padding: 10px;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto auto 1fr;
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
  padding: 20px;
  border-bottom-right-radius: 30px;
  border-top-left-radius: 30px;
  box-shadow: #666 1px 1px 4px 0;

  display: grid;
  grid-template-columns: 120px auto;
  grid-template-rows: auto;

  @media (max-width: 440px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;
export const Image = styled.img`
  border: 0.1rem solid #999;
  padding: 1px;
  width: 100px;
  height: 100px;
  border-radius: 50px;
  @media (max-width: 440px) {
    width: 170px;
    height: 170px;
    border-radius: 10px;
  }
`;
export const ProfileContainer = styled.div`
  align-self: center;
  @media (max-width: 440px) {
    margin-top: 20px;
  }
`;
export const FriendList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  grid-template-rows: auto;
  grid-gap: 1rem;
`;
export const FriendTitle = styled.h2`
  font-size: 24px;
  color: #fff;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);
  margin: 15px 0px;
  @media (max-width: 345px) {
    strong {
      display: block;
    }
  }
`;
