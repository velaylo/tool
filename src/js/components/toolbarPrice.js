import React from "react";
import styled from "styled-components";

const StyledToolbarPrice = styled.div`
    position: absolute;
    display: flex;
    padding: 5px;
    border-radius: 3px;
    background-color: #fafafa;
    border: 1px solid #bbb;
    z-index: 2;
    transform: translateX(-50%);
    left: ${props => props.leftSize};
    right: ${props => props.rightSize};
    .button {
      width: 50px;
      height: 50px;
      border-radius: 3px;
      margin: 5px;
      border: 1px solid #ccc;
      cursor: pointer;
      background-position: center center;
      background-size: 44px 44px;
      background-repeat: no-repeat;
      position: relative;

      &:hover {
        background-color: #fff;
      }

      &.is-active {
        background-color: #fff;
        border-color: #333;
      }

      &.is-crossed {
        position: relative;
        &::after {
          position: absolute;
          content: '';
          width: 175%;
          height: 2px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%) rotateZ(-45deg);
          background: red;
        }
      }

      &.is-disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      &::before {
        position: absolute;
        color: #fff;
        padding: 3px;
        left: 50%;
        transform: translateX(-50%);
        top: -30px;
        font-size: 14px;
        background-color: rgba(0, 0, 0, 0.7);
        opacity: 0;
        white-space: nowrap;
      }

      &:hover::before {
        opacity: 1;
      }

      ${'' /* dropdown (details and summary) */}
      & > details {
        position: absolute;
        top: -7px;
        left: -7px;
        width: calc(100% + 14px);
        border-radius: 3px;
        border: 1px solid;
        border-color: transparent;

        &[open] {
          background-color: #fff;
          border-color: #ccc;
        }

        summary {
          &::marker { content: ''; }
        }

        .dropdown-items > .button::before {
          top: 50%;
          left: calc(100% + 10px);
          transform: translateY(-50%);
        }
      }

      ${'' /* each button  */}

      &.remove {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        &::before {
          content: 'Удалить ценник'
        }
      }

      &.rColor_blue {
        background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" fill="%234EC4F0" rx="5"/></svg>');
        &::before {
          content: 'Фон правой части: синий'
        }
      }

      &.rColor_orange {
        background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" fill="%23ff9447" rx="5"/></svg>');
        &::before {
          content: 'Фон правой части: оранжевый'
        }
      }

      &.rColor_green {
        background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><rect width="40" height="40" fill="%2350cd24" rx="5"/></svg>');
        &::before {
          content: 'Фон правой части: зелёный'
        }
      }

      &.toggleLeft {
        background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d=" M 33 7 C 24.6 7 18.1 7 10 7 C 4.9 7 5 7.1 5 12 C 5 17.2 4.8 21 5 26 C 5.2 31 5.3 31 10 31 C 17.3 31 23.7 31 33 31 L 29 31 L 29 7" fill="rgb(255,255,255)" stroke="rgb(96,96,96)"/><path d=" M 30 8 L 30 30 L 33 30 L 32 27 L 33 25 L 32 22 L 33 19 L 32 16 L 33 13 L 32 11 L 33 8 L 30 8 Z " fill="rgb(0,255,255)" stroke="rgb(0,255,255)"/></svg>');
        &::before {
          content: 'Скрыть левую часть'
        }
        &.is-crossed::before {
          content: 'Показать левую часть'
        }
        &.is-disabled::before {
          content: 'Невозможно скрыть обе части';
        }
      }

      &.toggleRight {
        background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40"><path d=" M 4.9 7 C 13.3 7 19.8 7 27.9 7 C 33 7 32.9 7.1 32.9 12 C 32.9 17.2 33.1 21 32.9 26 C 32.7 31 32.6 31 27.9 31 C 20.7 31 14.2 31 4.9 31 L 8.9 31 L 8.9 7" fill="rgb(0,255,255)" stroke="rgb(96,96,96)"/><path d=" M 7.9 8 L 7.9 30 L 4.9 30 L 5.9 27 L 4.9 25 L 5.9 22 L 4.9 19 L 5.9 16 L 4.9 13 L 5.9 11 L 4.9 8 L 7.9 8 Z " fill="rgb(255,255,255)" stroke="rgb(255,255,255)"/></svg>');
        &::before {
          content: 'Скрыть правую часть'
        }
        &.is-crossed::before {
          content: 'Показать правую часть'
        }
        &.is-disabled::before {
          content: 'Невозможно скрыть обе части';
        }
        &.is-disabled.is-crossed.is-on-promo::before {
          content: 'Показать правую часть (скройте промо-текст)';
        }
      }

      &.toggleDivider {
        background-image: url('data:image/jpeg;base64,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');
        &::before {
          content: 'Скрыть разделительную полоску'
        }
        &.is-crossed::before {
          content: 'Показать разделительную полоску'
        }
      }

      &.togglePromo {
        background-image: url('data:image/jpeg;base64,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');
        &::before {
          content: 'Скрыть промо-текст';
        }
        &.is-crossed::before {
          content: 'Показать промо-текст';
        }
        &.is-crossed.is-disabled::before {
          content: 'Показать промо-текст (скройте правую часть)';
        }
      }

      &.toggleCrossed {
        background-image url('data:image/jpeg;base64,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');
        &::before {
          content: 'Скрыть зачёркнутые цены'
        }
        &.is-crossed::before {
          content: 'Показать зачёркнутые цены'
        }
      }

      &.toggleBottomRow {
        background-image: url('data:image/jpeg;base64,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');
        &::before {
          content: 'Скрыть нижнюю строку'
        }
        &.is-crossed::before {
          content: 'Показать нижнюю строку'
        }
      }

      &.applyToAll {
        background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAAuAC0DASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9S6K+JW+MfjT/AKGO9/76H+FfQP7OvjPVvGHhnUG1e7a9mtrrYk0gG7aVBwSOvJP519Djclr4Gi605Jpdr/5HyGW8S4bM8QsNThJNp726fM9Zooor54+vCivBfHnj7XrPxZqVtbajLbQQyeWkceAAB+HWucb4keJf+gzc/wDfQ/wr6enkFepCM1Naq/X/ACPga/GWDoVZ0nTk+VtdOnzPD2NfQPwBhkuPhV42ii1r/hG5XWZU1nCH7AxgwLjD/L+7+/8ANx8vPFfPjV9G/sz6PY+IvAPijStUs4dQ0y+le1urS5QPFPE8QV43U8MrKSCD1Br6zP8A/cJeq/M+I4T/AORrD0l+R86HwfrmTn/godpoP003/wCTK+i/2S9Hv9JtfEpvP2hIPjyHe32yW4tsaZgScEwyyHMn+0R/q+B1qwf2Dv2fTz/wqfw5/wCA5/xrvvhb8CPh98E11BfAvhHS/C/9oFDdtp8IRp9m7YGPUgbmwOg3H1r8sP3U8f8AiL/yO2s/9fDVzJ610nxFP/Fbaz/18NXMNX7Dhf8Ad6fovyP5kzD/AHyt/il+bPSD+ybYH/mP3P8A34X/ABr0z4ZfDW0+Gejz2Vrcy3bTy+bJLKAMnAAAA6DArsaK/MK+ZYvEw9nVndfI/oLC5PgMFU9th6SjLvr+rCiiivNPZPOfE/was/EOtXOorfzWzXDb3jChhuxzisj/AIZ9tv8AoLzf9+h/jXrtFerDNMZTioRqaL0/yPnanD2V1pyqToptu71f+Z//2Q==');
        &::before {
          content: 'Применить этот стиль ко всем ценникам';
        }
      }
    }

    .divider {
      width: 2px;
      height: 40px;
      margin: 5px;
      background-color: #333;
    }
`

function ToolbarPrice(props) {
    console.log(props)
    return (
        <StyledToolbarPrice className='price-toolbar'>
            <div className="button togglePromo"></div>
            <div className="button toggleCrossed"></div>
            <div className="button toggleBottomRow"></div>
            <div className="divider">|</div>
            <div className="button toggleLeft"></div>
            <div className="button toggleRight"></div>
            <div className="divider">|</div>
            <div className="button applyToAll"></div>
            <div className="button remove">✖</div>
        </StyledToolbarPrice>
    )
}

export default ToolbarPrice