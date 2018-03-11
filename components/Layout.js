const Layout = (props) => (
<html>
  <head>
    <title>kodify Chat</title>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
  </head>
  <div>
    {props.children}
    <style jsx global> {`  /* Bit of normalisation */
      @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500');
      @import url('https://fonts.googleapis.com/css?family=Inconsolata');
      /* http://meyerweb.com/eric/tools/css/reset/
         v2.0 | 20110126
         License: none (public domain)
      */
      html, body, div, span, applet, object, iframe,
      h1, h2, h3, h4, h5, h6, p, blockquote, pre,
      a, abbr, acronym, address, big, cite, code,
      del, dfn, em, img, ins, kbd, q, s, samp,
      small, strike, strong, sub, sup, tt, var,
      b, u, i, center,
      dl, dt, dd, ol, ul, li,
      fieldset, form, label, legend,
      table, caption, tbody, tfoot, thead, tr, th, td,
      article, aside, canvas, details, embed,
      figure, figcaption, footer, header, hgroup,
      menu, nav, output, ruby, section, summary,
      time, mark, audio, video {
      	margin: 0;
      	padding: 0;
      	border: 0;
      	font-size: 100%;
      	font: inherit;
      	vertical-align: baseline;
      }
      /* HTML5 display-role reset for older browsers */
      article, aside, details, figcaption, figure,
      footer, header, hgroup, menu, nav, section {
      	display: block;
      }
      body {
      	line-height: 1;
      }
      ol, ul {
      	list-style: none;
      }
      blockquote, q {
      	quotes: none;
      }
      blockquote:before, blockquote:after,
      q:before, q:after {
      	content: '';
      	content: none;
      }
      table {
      	border-collapse: collapse;
      	border-spacing: 0;
      }
      input:focus, textarea:focus {
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
        padding: 12px 0px 12px 12px;
        border: 1px solid rgba(81, 203, 238, 1);
      }
      input{
        background-color:white;
        outline: none;
        padding: 12px 0px 12px 12px;
        border: 1px solid #DDDDDD;
        width:90%
        margin-left:2.5%;
        outline:none;
        margin-bottom:20px;
      }
      body {
      	background-color: #eee;
      	color: #222;
      	font: 0.8125em/1.5  'Raleway', sans-serif;
      }
      img {
      	display: block;
      	height: auto;
      	max-width: 100%;
      }
      .name{
        font-size:11px;
        font-weight:bold;
        position:absolute;
        bottom:35px;
        left:15px;
        background:none;
      }
      .container {
      	padding: 40px 20px;
        overflow:auto;
      	margin: 0 auto;
      	width: 80%;
        heieght:80%
      }
      /* .bubble */
      .bubble {
      	background-image: linear-gradient(bottom, rgb(210,244,254) 25%, rgb(149,194,253) 100%);
      background-image: -o-linear-gradient(bottom, rgb(210,244,254) 25%, rgb(149,194,253) 100%);
      background-image: -moz-linear-gradient(bottom, rgb(210,244,254) 25%, rgb(149,194,253) 100%);
      background-image: -webkit-linear-gradient(bottom, rgb(210,244,254) 25%, rgb(149,194,253) 100%);
      background-image: -ms-linear-gradient(bottom, rgb(210,244,254) 25%, rgb(149,194,253) 100%);
      background-image: -webkit-gradient(
      	linear,
      	left bottom,
      	left top,
      	color-stop(0.25, rgb(210,244,254)),
      	color-stop(1, rgb(149,194,253))
      );
      	border: solid 1px rgba(0, 0, 0, 0.5);
      	/* vendor rules */
      	border-radius: 20px;
      	/* vendor rules */
      	box-shadow: inset 0 5px 5px rgba(255, 255, 255, 0.4), 0 1px 3px rgba(0, 0, 0, 0.2);
      	/* vendor rules */
      	box-sizing: border-box;
      	clear: both;
      	float: left;
      	margin-bottom: 20px;
      	padding: 8px 30px;
      	position: relative;
      	text-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
      	width: auto;
      	max-width: 100%;
      	word-wrap: break-word;
      }
      .bubble:before, .bubble:after {
      	border-radius: 20px / 10px;
      	content: '';
      	display: block;
      	position: absolute;
      }
      .bubble:before {
      	border: 10px solid transparent;
      	border-bottom-color: rgba(0, 0, 0, 0.5);
      	bottom: 0;
      	left: -7px;
      	z-index: -2;
      }
      .bubble:after {
      	border: 8px solid transparent;
      	border-bottom-color: #d2f4fe;
      	bottom: 1px;
      	left: -5px;
      }
      .bubble--alt {
      	background-image: linear-gradient(bottom, rgb(172,228,75) 25%, rgb(122,205,71) 100%);
      background-image: -o-linear-gradient(bottom, rgb(172,228,75) 25%, rgb(122,205,71) 100%);
      background-image: -moz-linear-gradient(bottom, rgb(172,228,75) 25%, rgb(122,205,71) 100%);
      background-image: -webkit-linear-gradient(bottom, rgb(172,228,75) 25%, rgb(122,205,71) 100%);
      background-image: -ms-linear-gradient(bottom, rgb(172,228,75) 25%, rgb(122,205,71) 100%);
      background-image: -webkit-gradient(
      	linear,
      	left bottom,
      	left top,
      	color-stop(0.25, rgb(172,228,75)),
      	color-stop(1, rgb(122,205,71))
      );
      	float: right;
      }
      .bubble--alt:before {
      	border-bottom-color: rgba(0, 0, 0, 0.5);
      	border-radius: 20px / 10px;
      	left: auto;
      	right: -7px;
      }
      .bubble--alt:after {
      	border-bottom-color: #ace44b;
      	border-radius: 20px / 10px;
      	left: auto;
      	right: -5px;
      }
      .bubble--think {
        background-image: rgb(181,189,200); /* Old browsers */
        background-image: -moz-linear-gradient(top, rgba(181,189,200,1) 0%, rgba(130,140,149,1) 36%, rgba(40,52,59,1) 100%); /* FF3.6-15 */
        background-image: -webkit-linear-gradient(top, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%); /* Chrome10-25,Safari5.1-6 */
        background-image: linear-gradient(to bottom, rgba(181,189,200,1) 0%,rgba(130,140,149,1) 36%,rgba(40,52,59,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#b5bdc8', endColorstr='#28343b',GradientType=0 ); /* IE6-9 */
        color:white
      }
       .bubble--think:before{
        border-bottom-color: #b5bdc8;
      }
      .bubble--think:after{
        border-bottom-color: #28343b;
      }
    `}
    </style>
  </div>
</html>
)

export default Layout
