import React from "react";
import styled from "styled-components";

const StyledOverlayContact = styled.div`
    position: fixed;
    z-index: 9999;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, .7);

    &:not([hidden]) {
      display: flex;
    }

    .modal {
        max-width: 800px;
        min-width: 500px;
        padding: 30px;
        border-radius: 10px;
        background-color: #fcfcfc;
        max-height: 550px;
        overflow-y: auto;
        form {
            p {
                line-height: 1.55;
                font-size: 18px;
                color: #6b6b6b;
                margin-bottom: 18px
            }
            .co-label {
                label {
                    font-family: "Source Sans Pro", sans-serif;
                    font-size: 14px;
                    line-height: 1.55;
                    color: #6b6b6b;
                }
            }
            .co-input {
                margin-bottom: 10px;
                font-family: "Roboto", sans-serif;
                line-height: 1.55;
                font-size: 18px;
                color: #6b6b6b;
                input {
                    border: 1px solid #ccc;
                    width: 100%;
                    padding: 3px 5px;
                    border-radius: 3px;
                    font-family: "Source Sans Pro", sans-serif;
                    color: #6b6b6b;
                    font-size: 16px;
                    :focus-visible {
                        outline: solid 2px lightseagreen;
                    }
                }
                .is-errored {
                    border-color: red;
                    background-color: rgba(255, 99, 71, 0.25);
                }
            }
            .flex {
                display: flex;
                justify-content: space-between;
                .co-btn {
                    border: 1px solid #ccc;
                    padding: 4px 8px;
                    border-radius: 3px;
                    font-family: "Roboto", sans-serif;
                    color: #6b6b6b;
                    font-size: 16px;
                    text-align: center;
                    display: inline-block;
                    margin-bottom: 5px;
                    cursor: pointer;
                }
            }
            .text-error { 
                color: red; 
                font-size: 14px;
                text-align: center;
            }
            .text-success {
                color: #50cd24; 
                font-size: 14px;
                text-align: center;
            }
        }
    }
`

function ContactForm(props) {

    const closeDataForm = () => {
        let overlay = document.querySelector('#overlay-contact');
        let form = document.querySelector('#data-form');
        form.reset();
        overlay.hidden = true;
    }

    const closeDataFormOutside = (event) => {
        const form = document.querySelector('.modal');
        
        const target = event.target;
        const itsForm = target == form || form.contains(target);
        const isFormActive = form.hidden

        if(!itsForm && !isFormActive) {
            form.closest('#overlay-contact').hidden = true;
            form.querySelector('form').reset()
        }
    }

    const setContactData = (event) => {
        event.preventDefault()

        let errorText;
        if (errorText = event.target.querySelector('[data-form-error]')) {
            event.target.removeChild(errorText)
        }

        let erroredFields = [];
        let userObj = [ ...event.target.elements ].reduce((acc, field) => {
            let { name, value, dataset } = field;
            if (dataset.required && !value) {
              erroredFields.push(name);
            }
            if (value) {
              acc[name] = value;
            }
        
            return acc;
        }, {});

        if (erroredFields.length) {
            showFormError(event.target, erroredFields);
            return false;
        }

        localStorage.setItem('offer2021_user', JSON.stringify(userObj));
        showFormSuccess(event.target, 'Сохранено!');
    }

    function showFormError(form, erroredFields) {
        erroredFields.forEach(name => {
            let input = form.querySelector(`input[name="${name}"]`);
            input.classList.add('is-errored');
            input.addEventListener('input', e => {
              if (e.target.value) {
                e.target.classList.remove('is-errored');
              }
            }, { once: true });
        });

        const textError = document.createElement('div');
        textError.classList.add('text-error');
        textError.textContent = '* Выделенные красным поля должны быть заполнены';
        textError.setAttribute('data-form-error', '')
    
        form.appendChild(textError);
    }

    function showFormSuccess(form, successText = 'Success') {
        const text = document.createElement('div');
        text.classList.add('text-success');
        text.textContent = successText;

        form.appendChild(text);
        setTimeout(() => { form.removeChild(text); }, 5000);
    }



    return(
        <StyledOverlayContact id="overlay-contact" hidden onClick={closeDataFormOutside}>
            <div className="modal">
                <form id="data-form" data-save-contact-data onSubmit={setContactData}>
                    <p style={{marginTop: '0px'}}>Ваши контактные данные для футера</p>
                    <div className="co-label"><label htmlFor="name">Имя и фамилия *</label></div>
                    <div className="co-input"><input type="text" name="name" data-required="1" /></div>
                    <div className="co-label"><label htmlFor="position">Должность *</label></div>
                    <div className="co-input"><input type="text" name="position" data-required="1"/></div>
                    <div className="co-label"><label htmlFor="phone">Телефон *</label></div>
                    <div className="co-input"><input type="text" name="phone" data-required="1"/></div>
                    <div className="co-label"><label htmlFor="email">Email *</label></div>
                    <div className="co-input"><input type="text" name="email" data-required="1"/></div>
                    <div className="co-label"><label htmlFor="whatsapp">WhatsApp (только цифры, <b>без плюсов, скобок и пробелов</b>)</label></div>
                    <div className="co-input"><input type="text" name="whatsapp"/></div>
                    <div className="co-label"><label htmlFor="linkedin">LinkedIn (ссылка на профиль)</label></div>
                    <div className="co-input"><input type="text" name="linkedin"/></div>
                    <div className="flex flex-jcsb">
                        <button className="co-btn" type="submit" onSubmit={setContactData}>Сохранить</button>
                        <button className="co-btn" type="button" data-close onClick={closeDataForm}>Закрыть</button>
                    </div>
                </form>
            </div>
        </StyledOverlayContact>
    )
}

export default ContactForm