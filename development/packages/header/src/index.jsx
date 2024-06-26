import {registerBlockType} from "@wordpress/blocks";

import "./editor-style.scss";
import "./style.scss";

import edit from "./edit";
import save from "./save";
import infos from "./block.json"

registerBlockType("entrepreneurs/header", {
    edit,
    save,
    attributes: {},
    ...infos
});