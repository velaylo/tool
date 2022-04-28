import React, { useState } from 'react';
import styled from "styled-components";
import loadImg from "../../images/fileLoad.png";

const StyledImgInput = styled.div`
    width: 100%;
    max-width: 1160px;
    margin: 0 auto; 
    padding-top: 50px;
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: relative;
    &:hover {
        form {
            display: flex;
        }
    }
    .img-container {
        display: flex;
        justify-content: center;
        width: 100%;
        img.loading-img {
            max-width: 100%;
            max-height: 600px;
        }
    }
    form {
        position: absolute;
        width: 100%;
        background-color: rgba(6, 6, 6, 0.4);
        height: 100%;
        display: none;
        align-items: center;
        justify-content: center;
        label {
            div {
                position: relative;
                input {
                    opacity: 0;
                    position: absolute;
                }
                .custom-input {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-color: #fff;
                    padding: 10px 25px;
                    border-radius: 6px;
                    img {
                        width: 24px;
                        height: auto;
                    }
                    p {
                        margin-left: 10px;
                        color: #000;
                    }
                }
            }
        }
    }
`

function AddImgTool(props) {
    const [imgUrl, setImgUrl] = useState(props.data.contents.imgUrl)

    async function inputFileHandler(event) {
        event.preventDefault();
        let file = event.target.files[0];
        let imageBase64 = await processFile(file);
        setImgUrl(imageBase64)
    }

    // главная логика
    function processFile(file) {
      return new Promise((resolve, reject) => {
        if (file && /(jpeg|png)/.test(file.type)) {
          const reader = new FileReader();
          reader.readAsDataURL(file); // ключевой метод
          reader.onerror = error => { 
            console.log(error);
            reject(error);
           };
          reader.onload = () => {
            resolve(reader.result);
          }
        }
      });
    }

    return(
        <StyledImgInput className="load-img-container">
            <div className='img-container'>
                <img
                    src={imgUrl}
                    data-value-content
                    data-key='imgUrl'
                    className='loading-img' />
            </div>
            <form>
                <label>
                    <div>
                        <input 
                            type="file"
                            onChange={(event) => inputFileHandler(event)}
                        />
                        <div className='custom-input'>
                            <img src={loadImg}></img>
                            <p>Загрузить изображение</p>
                        </div>
                    </div>
                </label>
            </form>
        </StyledImgInput>
    )
}

export default AddImgTool