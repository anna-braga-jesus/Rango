import styled from "styled-components";

const Css = {
  Header: styled.div`
    width: 100%;
    background-color: white;
    margin-bottom: 10px;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      justify-content: center;
      align-items: center;
      width: 50%;
      height: 100px;
      object-fit: cover;
    }
    @media screen and (max-width: 765px) {
      flex-direction: column;
    }
  `,
  Comments: styled.div`
    height: 700px;
    width: 700px;
    background-color: white;
    border-radius: 10px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    &::-webkit-scrollbar {
      width: 0;
    }
  `,
  CommentItem: styled.div`
    width: 100%;
    height: 20px;
    font-size: 1rem;
    margin-top: 10px;
    display: flex;
    align-items: center;
    padding: 20px;
    margin-bottom: 1rem;
    border-radius: 4px;
    font-weight: 700;
    background: #e8ede7;
    color: black;
  `,
  Box: styled.div`
    p {
      color: #315da3;
      font-size: 30px;
      box-shadow: 1.6;
      font-weight: 700;
    }
  `,
  Footer: styled.button`
    justify-content: center;
    align-items: center;
    width: 200px;
    height: 50px;
    margin-top: 10px;
    background: #1bb0e8;
    border: 1px solid white;
    p {
      font-size: 20px;
      color: white;
      font-weight: 700;
    }
  `,
  Clients: styled.button`
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 0;
    background: #1bb0e8;
    border: 1px solid white;
    cursor: pointer;
    p {
      font-size: 28px;
      color: white;
      font-weight: 700;
    }
  `,
};

export default Css;
