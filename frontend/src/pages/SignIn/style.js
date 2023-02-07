import styled from "styled-components";

const Css = {
  Screen: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    body {
      height: 100%;
      background-color: red;
      background-size: cover;
    }
    h1 {
      text-align: center;
      color: #3c3c3c;
      font-family: Helvetica, Arial, sans-serif;
    }
    img {
      border-radius: 4px;
      height: 50px;
      object-fit: cover;
      display: block;
      margin-left: auto;
      margin-right: auto;
      margin-bottom: 20px;
      margin-top: 20px;
    }
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;

    input:hover,
    textarea:hover,
    input:focus,
    textarea:focus {
      background-color: white;
    }
  `,
  FormDiv: styled.div`
    background-color: rgba(109, 109, 109, 0.4);
    width: 500px;
    height: 700px;
    padding: 25px;
    float: left;
    -moz-border-radius: 7px;
    -webkit-border-radius: 7px;
    background-size: cover;
    display: flex;
    flex-direction: column;
    h1 {
      text-align: center;
      color: #3c3c3c;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 30px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 580px) {
      left: 3%;
      margin-right: 3%;
      width: 88%;
      margin-left: 0;
      padding-left: 3%;
      padding-right: 3%;
    }
  `,
  Figure: styled.div`
    //background-color: red;
    background: url("https://hermes.digitalinnovation.one/companies/2b580e76-3c81-4874-99fd-80ed7fdc62dc.png")
      no-repeat;
    margin-top: 0;
    margin-bottom: 20px;
    /* object-fit: cover; */
    height: 100px;
    //background-size: 100px;
    border-radius: 4px;
  `,
  InputName: styled.input`
    background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
    background-size: 30px 30px;
    background-position: 11px 8px;
    background-repeat: no-repeat;
    margin: 15px 0 15px 0;
    font-size: 15px;
    width: 100%;
    height: 50px;
    line-height: 150%;
    resize: vertical;
    border: none;
    :focus {
      background-image: url(http://rexkirby.com/kirbyandson/images/name.svg);
      background-size: 30px 30px;
      background-position: 8px 5px;
      background-position: 11px 8px;
      background-repeat: no-repeat;
    }
  `,
  InputEmail: styled.input`
    background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
    background-size: 30px 30px;
    background-position: 11px 8px;
    background-repeat: no-repeat;
    margin: 15px 0 15px 0;
    font-size: 15px;
    width: 100%;
    height: 50px;
    line-height: 150%;
    resize: vertical;
    border: none;

    :focus {
      background-image: url(http://rexkirby.com/kirbyandson/images/email.svg);
      background-size: 30px 30px;
      background-position: 11px 8px;
      background-repeat: no-repeat;
    }
  `,
  InputComentario: styled.input`
    background-image: url(http://rexkirby.com/kirbyandson/images/comment.svg);
    background-size: 30px 30px;
    background-position: 11px 8px;
    background-repeat: no-repeat;
    margin: 15px 0 15px 0;
    font-size: 15px;
    width: 100%;
    height: 150px;
    line-height: 150%;
    resize: vertical;
    border: none;
  `,
  Submit: styled.div``,
  BlueButton: styled.button`
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    float: left;
    width: 100%;
    margin: 15px 0 15px 0;
    border: #fbfbfb solid 4px;
    cursor: pointer;
    background-color: #3498db;
    color: white;
    font-size: 24px;
    padding-top: 22px;
    padding-bottom: 22px;
    -webkit-transition: all 0.3s;
    -moz-transition: all 0.3s;
    transition: all 0.3s;
    font-weight: 700;

    :hover {
      background-color: rgba(0, 0, 0, 0);
      color: #0493bd;
    }

    .submit:hover {
      color: #3498db;
    }

    .ease {
      width: 0px;
      height: 74px;
      background-color: #fbfbfb;
      -webkit-transition: 0.3s ease;
      -moz-transition: 0.3s ease;
      -o-transition: 0.3s ease;
      -ms-transition: 0.3s ease;
      transition: 0.3s ease;
    }

    .submit:hover .ease {
      width: 100%;
      background-color: white;
    }
  `,
};

export default Css;
