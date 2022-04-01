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
  top: ${props => props.topSize};
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
  }

    
  ${'' /* each button  */}

  .remove {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    &::before {
      content: 'Удалить ценник'
    }
  }

  .toggleDivider {
    background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABkAGMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9U6KK8K+JX7VGn+DfGx8MaJpll4kv7UK2oNNr1pp6wbjgRx+c376Xg5jXBGVHfhpN7CbS3PdaK4L4g/HLwd8K9MtLvxVqo0ma6i82GwdDJct6jYm7oeM/dz3rD+Bn7RGk/Hq68QHRdMu7Gx0tolWa9ZRJMX3fwLkKBt/vHOe1PldrhzK9j1miuH+Jnxq8G/CG2il8U61FYSzKWhtVVpJ5QO6ooJxnjJwPeue+Bn7RGk/Hq68QHRdMu7Gx0tolWa9ZRJMX3fwLkKBt/vHOe1HK7XDmV7HrNFeQ/Hb9pTQfge1jYzWVzrviG/GbXSbLAcjOAzNg7QTwMAknoKwPhN+1tYePPGKeEfEnhjUfAviaYZt7PUSWWbjIXLIjBiOQCuDjg0crtcXMr2PfaKKKkoKKKKACiiigAr568cfDXxZ4T+LN74t8H+H7nxVb60kJuLf/AISm500WlzGSBLIvmbZoSpH7rBxtIAAOD9C0VSdhNXOI8QfCvw342n0/WfFnh7TdX1yzs/JBmUzwRk/MwRH+UjdnBK56V82f8E8VWOb4jKqhVW7gAUDAAzLxX2Lc/wDHvL/uH+VfHf8AwTz/AOPj4j/9fkH85auPwMiXxI+mfGHwq8I+NNVt9Y1/QLLWb+ygaG3e+TzUjUncf3bfKTnuRmvmX/gniqxzfEZVUKq3cACgYAGZeK+q/Enjbw74at5v7X17S9Kwpz9tvI4e3+0wr4Z/Y4+O3gT4UN47l8U+IYdMW8uomtgsUkzSgGTJURqx7j86wliKVODVSaXq0erhsozHHSj9Uw06n+GEpfkmdT8fNRX4U/tj+GPHHiW1ml8MSQxiO5WPeIysbI2B3KMwbA5wciuW/aO+NXhj4ofGj4a6j4Iu5b2TTrqNJL77NJAHYzxlUG8Kxx82eMfPXsvxE/bI+G954dbzvBmu+MtKkkVB9p0PFm7HO3LTgDJ7cE14paaX8TfjF8S/DnjHRfg3/ZfhXQGU6bosk8Wm264beHy6rvy+GJRMcAe9ZRzDD7pt+ib/ACTPUlwrm0dK1NU/+vk4U/8A0uUT778QavHoGg6jqUv+rtLeSc4Gc7VJx+lYVx4qfwP8OoNb8SyTXU1vbxPePDEoYuxUHCjaMAt+Q9a8Q8a3f7QPiq3sNEvLHwL4cttYuVgEQluLu5AX94xOMIUAT5u/IHerXi74C/GTxx4du7LV/jDbsswX/iW2OhxW0BwwPMw3SdvTsKx+syfw0pP7l+bRr/YdGn/vGPow9HOb/wDKcJL8TupP2j9AWS5hGh+JHuoYxcJbrph8ya3OT56gtxGAAdzbeGHHXFzxh+0N4P8ABej6TqF3cT3P9pwC6gtbVFMwiIzvYMyhQOnJ69M4NeXzfsYnVNfvrvXfHXijxFby6d5EbX2syK5nyflYIgHkj+7k8k8VQsv2H9F8O6fod5pWieHdQ123gaLUbfXTcXNncsST5oydwYcDG0A/zr2mJl8NNL1l/kn+ZP1TI6P8TF1Jv+5SVvvnUi//ACU9X039qT4U6lYwXP8Awnei2vmqGMN1eIkkZ7qy54I/zmisLwz+yR4GsNDtYdW0TTbvUsM88tvaJHHuZixCLt4UZwPYDgdKKm2K7x+5/wCZXNw9/LW++n/8iS618VPi7NrN/YeH/g4Jba3uJIY9V1PX4IYpQrFRIse3eVYDI9jVLyv2kNf+9P8AD/wrA3Ty0ury4X65+Q17zRSeGlJ+9Vk/uX5JMUc7o0YpUMDRi11anNvzfPOUfuSXkeDf8KR+K+uc698ctQjjbrBoWi29nt9hJksfqRR/wx/4d1LnxJ4y8c+LM/eTVdfkKH2CoFwPbNe80UfUaD+Jc3q2/wA2yv8AWjNY/wACoqX/AF7hCn/6RGLPIdD/AGR/g/4fKm28CabOw73/AJl3n6+azV6Fofgbw34Z2/2P4f0rSdvT7DZRQ4/75UVd17Wrfw5oeoatd7/sljbyXM3ljLbEUs2B3OAaxPBfxR8LfEKMtoWsQXsijLW/KSr9UYA/iOK7qWA5abrUaVordpaL1a2PAxvEOKxVZYfG4yU5y1SlNtv0Tep1VFFFBxhRRRQAUUUUAFFFFABRRRQB82ftj+NNe8If8Ij/AGJrF7pP2j7Z532Odo/M2+Rtzg843N+Zr5rPxk8eN/zOOuf+B8v/AMVX6SsqtjIB+opcAdBivuct4jw+AwsMPPCKbjfVta3bf8r723PzLOeD8XmmOqYynj5U4yt7qTaVkl/Ot7X26n5pXvxS8aalZz2t14q1q5tZ42jlhkvpWR0IwysC2CCCQQa5eOV4ZFeN2jdTlWU4II7g1+oXirQx4m8Mavo5m+zjULOa0M23ds8xCm7GRnGc4zXm/gr9l7wL4P8ALll09tbvFOfO1Ih1z7R/dx9QfrX1GF4ywMKUnKhyPpGNnfzbtFfmfEY3w7zOpXhGGK9pG2spXVvJK8m/wR4J8Gvi98XZrqCz0u0uvFmnxFY2ivIshBjAzPjK9vvEjivsTw7eanf6TDPq+nJpV8wy9rHcCcJ7bwADV62tYbO3SC3ijghQYSONQqqPQAdKlr89zbMqOY1Oelh40/Td+uy/C/mfrWRZNiMopezr4udbylay9L3l/wCTW8hrB8/Kyge4z/Wm7ZP76/8AfJ/xqSivAPqiPbJ/fX/vk/40bZP76/8AfJ/xqSigCPbJ/fX/AL5P+NFSUUAFFFFABRRRQAVyHjb4ueD/AIc6noum+ItettO1LWrmO0sLMhpJp5HbauEQFgu7guQFBIyRmuvr5Q/ba+Ifw68L6l4Kttdls4fGFnrGm6pDO+nPLcQ6el1mZlmWM4X922UDZOOh4oj8cIvZtJ+j/wAt/QHfkk10Tf8AX5ep9X0V4L+1F4osfFn7I/ijxBod40+n3+mwXdndorxMyNLGyOAwDKcEHkAivGNR/Zf8DL8avFfhd49Yn0OTwXHrt5ay6xckX2oieVRdTnfmSQcsMnaCzHbzRL3ebm6X/BNv8F99vVG6TXX9Wl+cl8rn3DRXwBqeraFrngL4H3vxpn1O6+FcnhhxLMjXbQPqykLEZzb/ADl/JD7Sf9v/AGq1dN8LXvjf4e/BDQfEM2sQ+HtQ8W38Gmia4kgvpdFNvceRFK4IcK8Q2HBGYmABGc1q6dm152/8m5dez627amSqKyk+qv8A+S82nddG++h9o+L/ABhpHgPw/ca3rt39h0u3aNJJ/KeTaZJFjQbUBY5Z1HA7+lZ8nxE02L4nW/gUwXX9rzaS+srMEXyBCkyxFS27dv3ODjbjGee1fE/jj4W+H7P9n/4w6DHp9zNoHgvxuk+l2v2ieX7BAVtvPK/MWKiOWYnOcbmbrzXXWPwv+Fvxh+LXgnQtDS5u/hoPAl1NZ2dteXVulwq6goCyFmWVlEhL7WP3kU9BioXK1GXR6/L2fOvnf77PaxbbTkn0/NTUX66b9ro+06K8Q/Y/v7m4/Zv8EedcSTtFbSwI0rbmEcc8iIuT2VVVR6ACitJ0+WTinsYe3S0ktT2+iiisTpCiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigD/9k=');
    &::before {
      content: 'Скрыть разделительную полоску'
    }
    &.is-crossed::before {
      content: 'Показать разделительную полоску'
    }
  }

  .togglePromo {
    background-image: url('data:image/png;base64,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');
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

  .toggleCrossed {
    background-image: url('data:image/png;base64,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');
    &::before {
      content: 'Скрыть зачёркнутые цены'
    }
    &.is-crossed::before {
      content: 'Показать зачёркнутые цены'
    }
  }

  .toggleBottomRow {
    background-image: url('data:image/png;base64,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');
    &::before {
      content: 'Скрыть нижнюю строку'
    }
    &.is-crossed::before {
      content: 'Показать нижнюю строку'
    }
  }

  .applyToAll {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFtSURBVHgB7dgxToRAFAbgH3Z7tlitNMFkYyz3CNRUegMqajgB2RsQLuBSUygXIHMDaEg0NthpbJYT4Ew0Zk2W6MCwjsn7kpcBJhB+AuEBQAghhAxn7K84jtPxwm+VZVnleb7hi/cYYXm2cmazWSROQWa/1+fHr/Of70+IEFEUQcI6juO7MAw9vpxigJPzK880u1uMZGKkIAjg+36MgXgIqSvXexwo4Lrugg9rSFraK4cPNhRQEsSyLDEs8IeUBNEBBdENBdENBdHNHNOweXk9c1teDRSbKoh4y/e1HhX+URDRDRs4InpGfiD6rusD23e82Oeo1JTPSN83xg1GfogdMlUQxuuiZ67BBKYKIjQ4Inqz64aC6IaC6IaC6IaC6EZJkLZtMYQBQ1kXrCRIURQNPhpFKW/NU9UpaulHB0nTFEmSbDCQaRghFPjW/TLGIKOua5ZlmQjBMNBL87A9tS936BDxW036jz4hhBCiwjsjj0qKEmdziQAAAABJRU5ErkJggg==');
    &::before {
      content: 'Применить этот стиль ко всем ценникам';
    }
  }

  .toggleLeft {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAChSURBVHgB7dnRDcIgFIXhixMwQjdlBGCSjuAKbnLdADHGFx+sJKacNv+XnNemPzxiBgDAfpa+a5/3NbENRXhKqbl729s/Q9acc5tlKyQMhDxvwmKMNkMI3391KOR1MHNshVzsJAhRQ4gaQtQQooYQNYSoIUQNIWoIUUOIGkLUEKJmJOTemaqRkFut1c5g6fNSyuGfFd4x6w8flX7oAQDg0wO5C9qp8EHnNAAAAABJRU5ErkJggg==');
    &::before {
      content: 'Скрыть левую часть'
    }
    .is-crossed::before {
      content: 'Показать левую часть'
    }
    .is-disabled::before {
      content: 'Невозможно скрыть обе части';
    }
  }

  .is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .divider {
    width: 2px;
    height: 40px;
    margin: 5px;
    background-color: #333;
  }

  .toggleRight {
    background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACSSURBVHgB7dnBDYMwDEBRpxO0G3SFTtwRqk7QVboBbADOAEiOkOAL/Sf5hA98JbdESJK0zwKcT84zBrQlbX5sLU4057xy/pXlW3Ddc97VZfKJdP1UHpVFekhX+gny1RpiCI0hNIbQGEJjCI0hNIbQGEJjCI0hNIbQGEJjyEG+1cXLPCt0tEeeKecXgw89kiTtsQKOkWHxfGYEPQAAAABJRU5ErkJggg==');
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
`

function ToolbarPrice(props) {

  function _checkButtonState(controlName, priceItem) {
    switch(controlName) {
      case 'toggleDivider':
        return priceItem.querySelector('.divider_').hidden ? 'is-crossed' : '';
      case 'togglePromo':
        if (!priceItem.querySelector('.right_').hidden) {
          return 'is-crossed is-disabled';
        } else if (priceItem.querySelector('.right_').hidden && priceItem.querySelector('.promo-text_').hidden) {
          return 'is-crossed';
        }
        return '';
      case 'toggleCrossed':
        return priceItem.querySelector('.price-main_.crossed_').hidden ? 'is-crossed' : '';
      case 'toggleBottomRow':
        return priceItem.querySelector('.bottom_').hidden ? 'is-crossed' : '';
      case 'toggleLeft':
        if (priceItem.querySelector('.left_').hidden) { return 'is-crossed'; }
        if (priceItem.querySelector('.right_').hidden) { return 'is-disabled'; }
        return '';
      case 'toggleRight':
        if (priceItem.querySelector('.right_').hidden) { 
          if (!priceItem.querySelector('.promo-text_').hidden) {
            return 'is-disabled is-crossed is-on-promo';
          }
          return 'is-crossed';
        }
        if (priceItem.querySelector('.left_').hidden) { return 'is-disabled'; }
        return '';
      case 'rColor_blue': case 'rColor_orange': case 'rColor_green':
        let color = controlName.split('_')[1];
        if (priceItem.querySelector(`.bg-color-${color}`)) { return 'is-active'; }
        return '';
      default: return '';
    }
  }

  return (
    <StyledToolbarPrice leftSize={props.leftSize} topSize={props.topSize} className='price-toolbar'>
      <div 
        className={"button togglePromo" + " " + _checkButtonState('togglePromo', props.target)}
        tabIndex={0}
        onClick={(e) => props.toolbarEvents['togglePromo'](e, props.target)}></div>
      <div 
        className={"button toggleCrossed" + " " + _checkButtonState('toggleCrossed', props.target)}
        tabIndex={0}
        onClick={(e) => props.toolbarEvents['toggleCrossed'](e, props.target)}></div>
      <div 
        className={"button toggleBottomRow" + " " + _checkButtonState('toggleBottomRow', props.target)}
        tabIndex={0}
        onClick={(e) => props.toolbarEvents['toggleBottomRow'](e, props.target)}></div>
      <div className="divider"></div>
      <div 
        className={"button toggleLeft" + " " + _checkButtonState('toggleLeft', props.target)}
        tabIndex={0}
        onClick={(e) => props.toolbarEvents['toggleLeft'](e, props.target)}></div>
      <div 
        className={"button toggleRight" + " " + _checkButtonState('toggleRight', props.target)}
        tabIndex={0}
        onClick={(e) => props.toolbarEvents['toggleRight'](e, props.target)}></div>
      <div className="divider"></div>
      <div
        className={"button applyToAll" + " " + _checkButtonState('applyToAll', props.target)}
        tabIndex={0}
        onClick={(e) => props.toolbarEvents['applyToAll'](e, props.target)}></div>
      <div 
        className={"button remove" + " " + _checkButtonState('remove', props.target)}
        tabIndex={0}
        onClick={() => props.toolbarEvents['remove'](props.target)}>✖</div>
    </StyledToolbarPrice>
  )
}

export default ToolbarPrice