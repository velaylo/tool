import styled from "styled-components";
import React from "react";
import construction from "../../images/offertypes/construction-top.jpg";
import trucks from "../../images/offertypes/trucks-top.jpg";
import campers from "../../images/offertypes/campers-top.jpg";
import buses from "../../images/offertypes/buses-top.jpg";
import forklifts from "../../images/offertypes/forklifts-top.jpg";
import attachments from "../../images/offertypes/attachments-top.jpg";
import spares from "../../images/offertypes/spares-top.jpg";
import trailers from "../../images/offertypes/trailers-top.jpg";
import agriculture from "../../images/offertypes/agriculture-top.jpg";


const StyledHelloScreen = styled.div`
    position: relative;
    .hello--header {
        width: 100%;
        max-width: 1160px;
        height: 100px;
        background-color: #2b2b2b;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 32px 100px;
        border-bottom-left-radius: 16px;
        border-bottom-right-radius: 16px;
        color: #fff;
        position: relative;
        z-index: 2;
        margin-bottom: 370px;
        .logo {
            width: 370px;
            height: 35px;
            background-position: center left;
            background-repeat: no-repeat;
            background-size: cover;
            &[data-logo="intl"] {
                background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 297 44" style="enable-background:new 0 0 297 44;" xml:space="preserve"><style type="text/css">	.st0{fill:%23ffffff;}</style><g>	<path class="st0" d="M199.9,18.4c-2,0.6-3.8,0.9-5.5,1l2.4-6.6c3.5-0.6,6.2-1.8,8.3-3.7h7.5L203,35.4h-9.3L199.9,18.4L199.9,18.4z"/>	<polygon class="st0" points="46,9 43,15.8 32.9,15.8 25.8,35.3 17.7,35.3 24.8,15.8 10,15.8 13.1,9 46,9 "/>	<path class="st0" d="M74.7,35.3H62.9l-5.5-6.6H46.2l-2.4,6.6h-8.2l4.9-13.4h22.7c1.4,0,2.6-0.2,3.7-0.6c1.3-0.5,2.2-1.3,2.6-2.4 c0.8-2.1-0.6-3.1-4-3.1H42.7L45.8,9h21.3c4.1,0,7.1,0.8,9.1,2.3c2.2,1.8,2.7,4.3,1.5,7.6c-0.7,1.8-1.9,3.5-3.6,5 c-1.7,1.5-3.7,2.6-6,3.4L74.7,35.3L74.7,35.3z"/>	<path class="st0" d="M114.3,23.3c-2.9,8-9.8,12-20.7,12h-1.7c-10.9,0-14.9-4-12-12L85.1,9h8.2L88,23.3c-0.9,2.4-0.4,3.9,1.4,4.6 c1,0.4,3.2,0.6,6.6,0.6c2.7,0,4.8-0.3,6.2-0.9c1.8-0.8,3.2-2.2,3.9-4.3L111.4,9h8.2L114.3,23.3L114.3,23.3z"/>	<path class="st0" d="M147.3,28.5l-2.6,6.8h-15.1c-4.6,0-7.9-1.3-10-3.8c-2.1-2.5-2.4-5.7-1-9.6c1.4-3.8,4-7,7.8-9.3 c3.8-2.4,8.1-3.6,12.7-3.6h15.3l-2.6,6.8h-15.1c-2.2,0-4.3,0.6-6.2,1.8c-1.9,1.2-3.2,2.8-3.9,4.6c-0.7,1.9-0.5,3.4,0.5,4.6 c1,1.2,2.7,1.8,4.9,1.8H147.3L147.3,28.5z"/>	<polygon class="st0" points="184.8,35.3 172.5,35.3 163.1,26.5 159.9,35.3 151.7,35.3 161.3,9 169.5,9 166.2,18 182,9 194.3,9 170.7,22.4 184.8,35.3 "/>	<path class="st0" d="M218.7,31.6c-0.3,0.9-1,1.7-2,2.3c-1,0.6-2,0.9-3.2,0.9c-1.2,0-2-0.3-2.5-0.9c-0.5-0.6-0.6-1.4-0.3-2.3 c0.4-1,1-1.8,2-2.4c1-0.6,2-0.9,3.2-0.9c1.2,0,2,0.3,2.5,0.9C219,29.8,219.1,30.6,218.7,31.6L218.7,31.6z"/>	<polygon class="st0" points="249.3,28.3 242,34.7 219.8,34.7 228.9,9.8 256,9.8 248.7,16.2 234.3,16.2 233.4,18.9 251.5,18.9 244.2,25.3 231,25.3 229.9,28.3 249.3,28.3 "/>	<path class="st0" d="M285.6,23.4c-2.8,7.6-9.3,11.4-19.7,11.4h-1.6c-10.4,0-14.2-3.8-11.4-11.4l4.9-13.6h7.8l-5,13.6 c-0.8,2.3-0.4,3.7,1.4,4.4c0.9,0.4,3,0.6,6.3,0.6c2.6,0,4.6-0.3,5.9-0.8c1.8-0.7,3-2.1,3.7-4.1l4.9-13.6h7.8L285.6,23.4L285.6,23.4 z"/></g></svg>');;
            }
            &[data-logo="de"] {
                background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 749 67" xml:space="preserve"><path d="M73.1,9.9L25,59.4h19l34.1-35.5l5.6,20h-19L53.4,55.5h33l1.2,4l19.7,0L92.8,9.9H73.1z M146.3,9.9h-15.4l-18,49.5h53.5 l4.8-12.8h-38.3L146.3,9.9z M205.4,9.9H190l-18,49.5h53.5l4.8-12.8H192L205.4,9.9z M289.5,22.7L304,9.9h-53.8l-18,49.5h43.9 l14.5-12.8h-38.4l2.1-5.9h26.1l14.5-12.8h-36l1.9-5.3H289.5z M304.4,40.8h27.1l5.2-12.8h-27.1L304.4,40.8z M373.2,9.9h-15.4 l-18,49.5h53.5l4.8-12.8h-38.3L373.2,9.9z M480,9.9h-23l-29.9,17l6.2-17h-15.4l-18,49.5h15.4l6-16.5L439,59.4h23.3L435.6,35 L480,9.9z M555.9,9.9l-16,28l-5.7-28h-15.9l-22,28l3-28h-16.8l-3.2,49.5h17l24.8-33.1l5.4,33.1H544l28.8-49.5H555.9z M572.7,46.7 c-2.3,0-4.4,0.6-6.3,1.8c-1.9,1.2-3.2,2.7-3.9,4.7c-0.7,1.9-0.5,3.4,0.5,4.6c1,1.2,2.7,1.8,5,1.8c2.3,0,4.4-0.6,6.3-1.8 c1.9-1.2,3.2-2.7,3.9-4.6c0.7-1.9,0.5-3.5-0.5-4.7C576.6,47.3,575,46.7,572.7,46.7z M655.6,16.6c-4-4.5-10.3-6.7-19-6.7h-33.2 l-4.6,12.8h33.2c4.2,0,7.3,1.1,9.2,3.4c1.9,2.3,2.3,5.2,1,8.7c-1.3,3.5-3.7,6.4-7.2,8.6c-3.5,2.2-7.4,3.3-11.7,3.3h-17.8l6.6-18.1 h-15.4l-11.2,30.9h33.2c8.6,0,16.6-2.4,24-7.2c7.4-4.8,12.4-10.8,15-18C660.2,27,659.5,21.1,655.6,16.6z M705.3,40.7l14.5-12.8 h-36l1.9-5.3h28.5l14.5-12.8h-53.8l-18,49.5h43.9l14.5-12.8h-38.4l2.1-5.9H705.3z" fill="%23ffffff"/></svg>');
                background-size: contain;
            }
            &[data-logo="ru"] {
              background-image: url('data:image/svg+xml;utf-8,<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 749 67" xml:space="preserve" fill="%23ffffff"><path d="M41.6,33.9l-4.1,7.4h18l-1.6,4.3H37.2c-4,0-6.9-1-8.7-3.1c-1.8-2-2.1-4.7-0.9-8c1.2-3.3,3.5-6,6.8-8.1 c3.4-2.1,7-3.2,10.9-3.2h30.6l4.4-11.9H49.7c-8.2,0-15.6,2.1-22.4,6.3c-6.7,4.2-11.4,9.7-13.8,16.4s-1.9,12.4,1.8,16.8 c3.7,4.5,9.5,6.7,17.6,6.7h31.1l8.4-23.6H41.6z M143.1,15.4c-3.5-2.7-8.9-4.1-16.1-4.1H88.6l-4.5,11.9H124c6,0,8.4,1.8,7.1,5.5 c-0.7,1.9-2.2,3.3-4.6,4.2c-1.9,0.7-4,1.1-6.4,1.1H80.2l-8.6,23.6H86l4.2-11.6H110l9.8,11.6h20.9l-11.7-13.9 c4.1-1.4,7.7-3.4,10.6-6.1c3-2.6,5.1-5.6,6.3-8.8C147.9,23,147,18.5,143.1,15.4z M205.2,11.3l-9.2,25.2c-1.4,3.7-3.7,6.2-6.9,7.6 c-2.4,1-6,1.5-10.9,1.5c-6.1,0-10-0.3-11.7-1c-3.2-1.2-4.1-3.9-2.6-8.1l9.2-25.2h-14.4l-9.2,25.2c-5.1,14,2,21.1,21.2,21.1h3 c19.3,0,31.4-7,36.5-21.1l9.2-25.2H205.2z M279.7,11.3h-54.1l-4.2,11.9h32.3l-36.2,23.2l-4.5,11.1h56.3l3.1-11.9h-32.8l36.2-23.2 L279.7,11.3z M329.4,11.3h-13.9c-8.2,0-15.6,2.1-22.4,6.3c-6.8,4.2-11.4,9.7-13.8,16.4c-2.5,6.8-1.9,12.4,1.8,16.8 c3.7,4.5,9.5,6.7,17.6,6.7h13.9c8,0,15.5-2.2,22.4-6.7c6.9-4.5,11.6-10.1,14.1-16.8c2.5-6.8,1.8-12.2-1.9-16.4 C343.5,13.4,337.6,11.3,329.4,11.3z M334.6,34.6c-1.2,3.3-3.5,6-6.8,8c-3.3,2-6.9,3.1-10.9,3.1H303c-4,0-6.9-1-8.7-3.1 c-1.8-2-2.1-4.7-0.9-8c1.2-3.3,3.5-6,6.8-8.1c3.3-2.1,7-3.2,11-3.2h13.9c3.9,0,6.8,1.1,8.6,3.2C335.5,28.5,335.8,31.2,334.6,34.6z M410.5,11.3l-31.2,30.5L369,11.3h-17.8l15.2,46.2l15.6,0.1l46.4-46.2H410.5z M434.4,11.3l-16.8,46.3h14.4l16.8-46.3H434.4z M520.5,11.3H499l-28,15.9l5.8-15.9h-14.4l-16.8,46.3h14.4l5.6-15.5l16.6,15.5h21.8l-25-22.8L520.5,11.3z M523.5,45.7 c-2.1,0-4.1,0.6-5.9,1.7c-1.8,1.1-3,2.6-3.6,4.4c-0.6,1.8-0.5,3.2,0.5,4.3c1,1.1,2.5,1.7,4.7,1.7c2.1,0,4.1-0.6,5.9-1.7 c1.8-1.1,3-2.5,3.6-4.3c0.7-1.8,0.5-3.3-0.5-4.4C527.2,46.2,525.7,45.7,523.5,45.7z M550.2,42.5c-1.8-2.1-2.1-4.7-0.9-8 c1.2-3.3,3.5-6,6.8-8.1c3.3-2.1,7-3.2,10.9-3.2h23.2l4.4-11.9h-23.3c-8.2,0-15.6,2.1-22.4,6.3c-6.7,4.2-11.4,9.7-13.8,16.4 c-2.5,6.8-1.9,12.4,1.8,16.8c3.7,4.5,9.5,6.7,17.6,6.7h25.1l4.4-11.9h-25.1C554.9,45.6,552,44.6,550.2,42.5z M656.4,17.6 c-3.7-4.2-9.6-6.3-17.8-6.3h-13.9c-8.2,0-15.6,2.1-22.4,6.3c-6.8,4.2-11.4,9.7-13.8,16.4s-1.9,12.4,1.8,16.8 c3.7,4.5,9.5,6.7,17.6,6.7h13.9c8,0,15.5-2.2,22.4-6.7c6.9-4.5,11.6-10.1,14.1-16.8C660.7,27.2,660.1,21.8,656.4,17.6z M643.8,34.6c-1.2,3.3-3.5,6-6.8,8c-3.3,2-6.9,3.1-10.9,3.1h-13.9c-4,0-6.9-1-8.7-3.1c-1.8-2-2.1-4.7-0.9-8c1.2-3.3,3.5-6,6.8-8.1 c3.3-2.1,7-3.2,11-3.2h13.9c3.9,0,6.8,1.1,8.6,3.2C644.7,28.5,645,31.2,643.8,34.6z M723,11.1l-22.6,28l-5.7-28h-16.3l-27,46.6 h15.8l14.9-24.5l5.4,24.5h14.8l20.6-24.5l-2.8,24.5h15.7l3-46.6H723z"/></svg>');
              background-size: contain;
            }
        }
        .slogan {
            font-family: 'Source Sans Pro', sans-serif;
            font-size: 18px;
            font-weight: bold;
            line-height: 1.55;
            :focus-visible {
                outline: solid 2px lightseagreen;
            }
        }
    }
    .hello-information {
        width: 100%;
        max-width: 1160px;
        margin: 0 auto;
        background-color: #F8F9F9;
        border-top-right-radius: 15px;
        border-top-left-radius: 15px;
        position: relative;
        padding-top: 36px;
        z-index: 2;
        .heading {
            font-size: 36px;
            font-weight: bold;
            letter-spacing: .05em;
            margin-bottom: 40px;
            text-align: center;
            text-transform: uppercase;
            line-height: 1.55;
            color: #323F4B;
            :focus-visible {
                outline: solid 2px lightseagreen;
            }
        }
        .divider-line {
            max-width: 770px;
        }
        .hello-screen-hr {
            width: 770px;
            height: 1px;
            background-color: #E3E8F1;
            margin: 0 auto;
            flex: none;
            order: 1;
            flex-grow: 0;
            border: none;
        }
        .achievements {
            padding: 60px 60px;
            display: flex;
            justify-content: space-between;
            .achieve {
              text-align: center;
              .value {
                font-size: 24px;
                font-weight: bold;
                letter-spacing: initial;
                margin-bottom: 0;
                color: #323F4B;
              }
              .key {
                margin-top: 4px;
                font-family: 'Source Sans Pro', sans-serif;
                font-weight: 400;
                font-size: 18px;
                color: #47535F;
                :focus-visible {
                    outline: solid 2px lightseagreen;
                }
              }
            }
        }
    }   
    .hello-image {
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 100%;
        height: 570px;
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        &[data-type=construction] {
            background-image: url(${construction})
        }
        &[data-type=trucks] {
            background-image: url(${trucks})
        }
        &[data-type=trailers] {
            background-image: url(${trailers})
        }
        &[data-type=agriculture] {
            background-image: url(${agriculture})
        }
        &[data-type=spares] {
            background-image: url(${spares})
        }
        &[data-type=attachments] {
            background-image: url(${attachments})
        }
        &[data-type=forklifts] {
            background-image: url(${forklifts})
        }
        &[data-type=buses] {
            background-image: url(${buses})
        }
        &[data-type=campers] {
            background-image: url(${campers})
        }
    }
`

function RenderAchievements(props) {
    const achievements = ['visitors', 'sellers', 'versions', 'years'];
    const listAchievements = achievements.map((item) => 
        <div key={item} className="achieve">
            <div className="value heading" data-key={item}>{props.types[item]}</div>
            <div 
                suppressContentEditableWarning={true} 
                contentEditable={true} 
                data-value-content
                data-key={item+'_text'}
                tabIndex={0} 
                className="key">
                    {props.types[`${item}_text`]}
            </div>
        </div>
    )
    
    return (
        <>{listAchievements}</>
    )
}

function HelloScreenTool(props) {
    return (
        <StyledHelloScreen className="hello--wrapper">
            <div className="hello--header">
                <div
                    className="logo" 
                    data-logo={props.dataLogo} 
                    data-value-attr="logo">
                </div>
                <span 
                    className="slogan" 
                    contentEditable={true} 
                    data-value-content
                    data-key="slogan"
                    suppressContentEditableWarning={true} 
                    tabIndex={0}>
                        {props.dataContents.slogan}
                </span>
            </div>
            <div className="hello-information">
                <div
                    contentEditable={true}
                    suppressContentEditableWarning={true}  
                    tabIndex={0} 
                    data-value-content
                    data-key="heading"
                    className="heading">
                        {props.dataContents.heading}
                </div>
                <hr className="hello-screen-hr" />
                <div className="achievements" data-key="stats">
                    <RenderAchievements types={props.dataContents} />
                </div>
            </div>
            <div
                className="hello-image" 
                data-type={props.type} 
                data-value-attr="type">
            </div>
        </StyledHelloScreen>
    )
}

export default HelloScreenTool