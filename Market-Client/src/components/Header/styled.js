import styled from "styled-components";

export const Header = styled.header`
  background-color: #47ade2;
  display: flex;
  width: 100%;
  height: 98px;

  .container {
    width: 70%;
    display: flex;

    .left-area {
      padding-top: 3px;
      height: 100%;
      width: 200px;
      .logo {
        background-color: aquamarine;
        height: 40px;
        width: 120px;
        display: flex;
        text-align: center;
        p {
          color: black;
          width: 100%;
          height: 100%;
          padding: 5px;
          text-align: center;
        }
      }

      .address {
        div {
          font-weight: bolder;
        }
      }
    }

    .center {
      height: 100%;
      .search {
        height: 50%;
        display: flex;

        input {
          margin-top: auto;
          width: 470px;
          box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px,
            rgba(0, 0, 0, 0.24) 0px 1px 2px;
        }

        div {
          display: flex;
          button {
            margin-top: auto;
            margin-left: 3px;
          }
        }
      }

      .nav {
        display: flex;
        height: 50%;
        padding-bottom: 3px;

        .nav-list {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: space-between;

          li {
            margin-top: auto;
            list-style: none;
            cursor: pointer;
            color: #535c68;

            &:hover {
              color: #2d3436;
            }
          }
        }
      }
    }
  }
`;
