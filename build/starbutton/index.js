(function(t,e){"use strict";function s({attributes:o,setAttributes:g,isSelected:B}){const i=e.useBlockProps();return[React.createElement("div",{key:"render",...i},React.createElement("div",{className:"but star-but"},React.createElement("span",null,"Réserver un appel")))]}function r({attributes:o}){return e.useBlockProps.save(),null}const n={$schema:"https://schemas.wp.org/trunk/block.json",apiVersion:3,name:"entrepreneurs/starbutton",version:"0.1.0",title:"StarButton",category:"text",keywords:[],description:"",supports:{html:!1},attributes:{},example:{},render:"./render.php",textdomain:"entrepreneurs",editorScript:"file:./index.js",editorStyle:"file:./editor-style.css",style:"file:./style.css"};t.registerBlockType("entrepreneurs/starbutton",{edit:s,save:r,attributes:{},...n})})(wp.blocks,wp.blockEditor);